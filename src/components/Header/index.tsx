import { HeaderStyle } from './Header.styled';
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
interface HeaderProps {
	isDarkTheme: boolean;
	toggleTheme: () => void;
}

export default function Header({ isDarkTheme, toggleTheme }: HeaderProps) {
	return (
		<HeaderStyle>
			<a className="logo" href="#">
				<AiOutlineGlobal className="main-icon" />
				<h1 className="main-title">What HTTP?</h1>
			</a>
			<nav className="navbar">
				<a href="">HTTP Cats</a>
				<a href="">Github</a>
				<button className="btn-theme" onClick={toggleTheme}>
					{isDarkTheme ? (
						<IoMdMoon className="theme-icon" />
					) : (
						<IoMdSunny className="theme-icon" />
					)}
				</button>
			</nav>
		</HeaderStyle>
	);
}
