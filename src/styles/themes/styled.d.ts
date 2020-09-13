/**
 * @description Types definition
 * Typescript global types definition configuration.
 * Overwrites type definitions present in styled components
 */

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
    };
  }
}
