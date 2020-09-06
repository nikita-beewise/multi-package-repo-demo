import theme from '@nikita-beewise-test/theme';

export default {
  primary: {
    backgroundColor: theme.color.blue,
    color: theme.color.white,
    path: {
      stroke: theme.color.white,
    },
    disabled: {
      backgroundColor: theme.color.darkGrey,
    },
  },
  secondary: {
    backgroundColor: theme.color.lightGrey,
    color: theme.color.blue,
    disabled: {
      color: theme.color.darkGrey,
      path: {
        stroke: theme.color.darkGrey,
      },
    },
  },
};
