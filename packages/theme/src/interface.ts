type HexColor = string;

export default interface Theme {
  name: string;
  color: {
    grey: HexColor;
    darkGrey: HexColor;
    lightGrey: HexColor;
    good: HexColor;
    bad: HexColor;
    queen: HexColor;
    pollen: HexColor;
    broodEgg: HexColor;
    broodSealed: HexColor;
    pesticides: HexColor;
    honey: HexColor;
    brand: HexColor;
    broodOpen: HexColor;
    feeder: HexColor;
    blue: HexColor;
    lightBlue: HexColor;
    white: HexColor;
    black: HexColor;
  };
}
