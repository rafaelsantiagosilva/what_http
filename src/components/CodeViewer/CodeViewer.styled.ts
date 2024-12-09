import styled from "styled-components";
import { ThemeProps } from "../../styles/global.styles";

export const CodeViewerStyles = styled.section<ThemeProps>`
  img.cat-http {
    border: 3px solid ${({ theme }) => theme.primaryColor};
    border-radius: 10px;
    margin-top: 1rem;
    width: 70%;

  };

  h2 {
    font-size: 150%;
  }

  p {
		margin: 1rem 5rem;
		text-align: justify;
		font-size: 125%;
	}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`; 