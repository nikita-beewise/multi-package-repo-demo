import Theme from './interface';

export const AvailableColors = {
  grey: '#E6E6E6',
  darkGrey: '#8D8D8D',
  lightGrey: '#F7F7F7',
  good: '#67C561',
  bad: '#F22A2A',
  queen: '#3ACFC0',
  pollen: '#FFDE5E',
  broodEgg: '#D9808B',
  broodSealed: '#E09196',
  pesticides: '#137C39',
  honey: '#EB6E17',
  brand: '#FEBA12',
  broodOpen: '#E8A5A5',
  feeder: '#DD4793',
  blue: '#0075FF',
  lightBlue: '#72B3FF',
  black: '#000',
  white: '#fff',
};

export type AvailableColorsList = keyof typeof AvailableColors;

const theme: Theme = {
  name: 'default',
  color: AvailableColors,
};

export default theme;
