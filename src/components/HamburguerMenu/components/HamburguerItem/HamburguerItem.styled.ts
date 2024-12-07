import styled from "styled-components";
import { Theme } from "../../../../styles/themes";

interface HamburguerItemStyleProps {
  borderTop?: boolean;
  theme: Theme;
}

export const HamburguerItemStyle = styled.div<HamburguerItemStyleProps>`
  padding: 1rem 3rem;
  font-size: 120%;
  width: 100%;
  text-align: end;
  border-color: ${({ theme }) => theme.primaryColor};
  border-bottom: 1px solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top: ${({ borderTop }) => borderTop ? '1px solid' : '0px'};
  white-space: nowrap;

  * {
    color: ${({ theme }) => theme.primaryTextColor};
  }`;