import express from 'express';
import vike from 'vike-node/connect';

const port = process.env.PORT || 3050;

const startServer = () => {
  const app = express();

  app.use(vike());
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
}

startServer();