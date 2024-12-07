import { HeaderStyle } from './Header.styled';
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoSearchSharp } from 'react-icons/io5';

export interface HeaderProps {
	isDarkTheme: boolean;
	toggleTheme: () => void;
	setIsHamburguerOpen: (isHamburguerOpen: true) => void;
}

export default function Header({
	isDarkTheme,
	toggleTheme,
	setIsHamburguerOpen,
}: HeaderProps) {
	return (
		<HeaderStyle>
			<a className="logo" href="#">
				<AiOutlineGlobal className="main-icon" />
				<h1 className="main-title">What HTTP?</h1>
			</a>
			<form className="link-to-search">
				<IoSearchSharp />
				<input className="input-search-code" placeholder="Pesquisar"></input>
			</form>
			<nav className="navbar">
				<a href="https://http.cat/" target="blank">
					HTTP Cats
				</a>
				<a href="https://github.com/rafaelsantiagosilva/what_http/" target="blank">
					Github
				</a>
				<button className="btn-theme" onClick={toggleTheme}>
					{isDarkTheme ? (
						<IoMdMoon className="theme-icon" />
					) : (
						<IoMdSunny className="theme-icon" />
					)}
				</button>
			</nav>
			<button
				className="btn-open-hamburguer"
				onClick={() => setIsHamburguerOpen(true)}
			>
				<RxHamburgerMenu />
			</button>
		</HeaderStyle>
	);
}
