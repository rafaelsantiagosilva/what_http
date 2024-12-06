import styled from "styled-components";
import { ThemeProps } from "../../styles/global.styles";

export const FooterStyle = styled.footer<ThemeProps>`
  text-align: center;
  color: ${({theme}) => theme.primaryTextColor};
  padding: 5rem 0;
`;