const mainColors = {
  yellow1: '#FFC700',
  green1: '#1ABC9C',
  dark1: '#8D92A3',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  grey4: '#B1B7C2',
  blue1: '#0066CB',
  black1: '#020202',
  black2: 'rgba(0, 0, 0, 0.5)',
  red1: '#D9435E',
  white: '#FFFFFF',
  white2: '#F0F0F0',
};

export const colors = {
  primary: mainColors.yellow1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  white: mainColors.white,
  white2: mainColors.white2,
  black: 'black',
  disable: mainColors.grey3,
  text: {
    primary: mainColors.black1,
    secondary: mainColors.dark2,
    tertiary: mainColors.white,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.yellow1,
      text: mainColors.black1,
    },
    secondary: {
      background: mainColors.dark1,
      text: mainColors.white,
    },
    disable: {
      background: mainColors.grey3,
      text: mainColors.grey4,
    },
  },
  border: mainColors.black1,
  cardLight: mainColors.green2,
  loadingBackground: mainColors.black2,
  error: mainColors.red1,
};
