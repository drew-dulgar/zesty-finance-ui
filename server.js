import path from 'node:path';
import fs from 'node:fs/promises';
import express from 'express';
import cookieParser from 'cookie-parser';

const isProduction = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
const port = process.env.PORT || 3050;

const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined

export const createServer = async () => {
  const app = express();
  const root = process.cwd();

  let vite;

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');

    vite = await createViteServer({
      root,
      server: { 
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
      },
      appType: 'custom',
      logLevel: isTest ? 'error' : 'info',
    });
    app.use(vite.middlewares);
  } else {
    const compression = (await import('compression')).default;
    const sirv = (await import('sirv')).default;

    app.use(compression());
    app.use('/assets', sirv('./dist/client', { extensions: [] }));
  }

  app.use(cookieParser());

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      const entry = await (async () => {
        if (!isProduction) {
          return vite.ssrLoadModule('/src/entry-server.jsx');
        } else {
          return import('./dist/server/entry-server.js');
        }
      })();

      console.info('Rendering: ', url, '...')
      const { html, router } = await entry.render(url, ssrManifest, req.cookies);

      res.statusCode = router.hasNotFoundMatch() ? 404 : 200
      res.setHeader('Content-Type', 'text/html')
      res.end(`<!DOCTYPE html>${html}`);

    } catch (e) {
      !isProduction && vite.ssrFixStacktrace(e);
      console.info(e.stack);
      res.status(500).end(e.stack);
    }
  })

  return { app, vite };
}

if (!isTest) {
  createServer().then(async ({ app }) =>
    // Start http server
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    })
  )
}