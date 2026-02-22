import { createTheme } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'cerulean',
  fontFamily: 'Tahoma, Verdana, sans-serif',
  colors: {
    cerulean: [
      '#e9f8ff',
      '#d9ecf5',
      '#b3d6e8',
      '#8ac0dc',
      '#69add1',
      '#53a1cb',
      '#469bc9',
      '#3687b2',
      '#2978a0',
      '#0e688e',
    ],
    coral: [
      '#ffeee4',
      '#ffdbcd',
      '#ffb59b',
      '#ff8d64',
      '#fe6b37',
      '#fe5619',
      '#ff4a09',
      '#e43b00',
      '#cb3200',
      '#b22700',
    ],
    red: [
      '#ffeceb',
      '#f9d7d6',
      '#efadaa',
      '#e7807b',
      '#e15a53',
      '#dd423a',
      '#dc362c',
      '#c32820',
      '#ae211b',
      '#991714',
    ],
  },
});

export default theme;
