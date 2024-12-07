import styled from "styled-components";
import { ThemeProps } from "../../styles/global.styles";

export const CodeViewerStyles = styled.section<ThemeProps>`
  img.cat-http {
    border: 3px solid ${({ theme }) => theme.primaryColor};
    border-radius: 10px;
    margin-top: 1rem;
    width: 50dvw;

  };

  display: flex;
  align-items: center;
  justify-content: center;
`; 