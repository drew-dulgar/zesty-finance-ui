import {
  isServer,
  QueryClient,
} from '@tanstack/react-query';

let browserQueryClient = undefined;

const makeQueryClient = () => {
  return new QueryClient();
};

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient();
    }

    return browserQueryClient;
  }
};

export default getQueryClient;