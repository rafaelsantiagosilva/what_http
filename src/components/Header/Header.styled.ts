import styled from "styled-components";
import { ThemeProps } from "../../styles/global.styles";

export const HeaderStyle = styled.header<ThemeProps>`
  .main-title {
    font-size: 150%;
    color: ${({ theme }) => theme.primaryTextColor} ;
  };

  .main-icon {font-size: 150%; color: ${({ theme }) => theme.primaryColor}}

  a.logo {
    display: flex;
    align-items: center;
  };

  a.logo:hover {
    text-decoration: none;
  };

  nav.navbar {
    display: flex;
    align-items: center;
    text-align: end;
    justify-content: space-evenly;
    width: 20dvw;
    color: ${({ theme }) => theme.primaryTextColor} ;
  };

  nav.navbar > a {
    white-space: nowrap;
  };

  button.btn-theme {
    cursor: pointer;
  };

  button.btn-open-hamburguer {
      display: none;
  };

  .theme-icon {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 150%;
  };

  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 8px 2px 8px rgba(0, 0, 0, 0.3);
  width: 100dvw;
  z-index: 2;

  @media screen and (max-width: 768px) {
    button.btn-open-hamburguer {
      display: block;
      font-size: 150%;
    }

    nav.navbar {
      display: none;
    }
  }
`;