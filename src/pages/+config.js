import vikeReact from 'vike-react/config';
import vikeReactQuery from 'vike-react-query/config';

export default {
  title: 'zesty',
  ssr: true,
  stream: true,
  extends: [
    vikeReact,
    vikeReactQuery
  ]
};