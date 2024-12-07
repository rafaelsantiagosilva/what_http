import styled from 'styled-components';
import { ThemeProps } from '../../styles/global.styles';

export const ArticleStyles = styled.article<ThemeProps>`
	h1.main-title {
		margin: 1rem;
		text-align: center;
	}

	p {
		margin: 0.5rem 5rem;
		text-align: justify;
		font-size: 110%;
	}

	ul.errors-types {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 0.5rem 5rem;
    font-weight: bold;
    flex-wrap: wrap;
	}

  ul.errors-types > li {
    text-align: justify;
  };
`;
