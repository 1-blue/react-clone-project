import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    mainColor: string;
    upperColor: string;
    lowerColor: string;
  }
}
