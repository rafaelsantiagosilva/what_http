import { createGlobalStyle } from "styled-components";
import { ResetStyles } from "./reset";
import type { Theme } from "./themes";

export interface ThemeProps {
  theme: Theme
}

export const GlobalStyles = createGlobalStyle<ThemeProps>`
  ${ResetStyles};
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.primaryTextColor};
    transition: 0.3s;
  };

  a {
    color: ${({ theme }) => theme.primaryColor};
  }

  a:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.primaryColorHover};
  }
`;
