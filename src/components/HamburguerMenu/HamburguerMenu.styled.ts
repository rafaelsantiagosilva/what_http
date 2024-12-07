import styled from "styled-components";
import { Theme } from "../../styles/themes";

interface HamburguerStyleProps {
  theme: Theme;
  isHamburguerOpen: boolean;
}

export const HamburguerStyle = styled.menu<HamburguerStyleProps>`
  width: 70dvw;
  height: 200%;
  left: 30dvw;
  position: fixed;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: -4px 6px 8px rgba(0, 0, 0, 0.3);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: end;

  .btn-hamburguer {
    font-size: 100%;
  };

  .theme-icon {
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 3px;
    border-color: ${({ theme }) => theme.primaryColor};
  };

  .btn-close {
    font-size: 250%;
    padding: 0.3rem 1rem;
  }

  animation: hamburguerOpenAnimation 0.3s ease-in-out ${({isHamburguerOpen}) => !isHamburguerOpen && 'reverse'};
`;