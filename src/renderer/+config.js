// https://vike.dev/config
export default {
  // https://vike.dev/clientRouting
  clientRouting: true,
  // https://vike.dev/meta
  meta: {
    title: {
      env: { 
        server: true, 
        client: true 
      }
    },
    description: {
      env: { 
        server: true 
      }
    }
  },
  hydrationCanBeAborted: true
};
