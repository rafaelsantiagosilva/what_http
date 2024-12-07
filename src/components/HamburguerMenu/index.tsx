import { HamburguerStyle } from './HamburguerMenu.styled';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import HamburguerItem from './components/HamburguerItem';

interface HamburguerMenuProps {
	isDarkMode: boolean;
	toggleTheme: () => void;
	isHamburguerOpen: boolean;
	setIsHamburguerOpen: (isHamburguerOpen: boolean) => void;
}

export default function HamburguerMenu({
	isDarkMode,
	toggleTheme,
	isHamburguerOpen,
	setIsHamburguerOpen,
}: HamburguerMenuProps) {
	return (
		<HamburguerStyle isHamburguerOpen={isHamburguerOpen}>
			<button
				className="btn-hamburguer btn-close"
				onClick={() => setIsHamburguerOpen(false)}
			>
				<IoClose />
			</button>
			<HamburguerItem borderTop={true}>
				<button className="btn-hamburguer" onClick={toggleTheme}>
					{isDarkMode ? (
						<div className="theme-icon">
							<IoMdMoon />
							<span>Escuro</span>
						</div>
					) : (
						<div className="theme-icon">
							<IoMdSunny />
							<span>Claro</span>
						</div>
					)}
				</button>
			</HamburguerItem>
			<HamburguerItem>
				<a href="https://http.cat/" target="blank">
					HTTP Cats
				</a>
			</HamburguerItem>
			<HamburguerItem>
				<a href="https://github.com/rafaelsantiagosilva/what_http" target="blank">
					Github
				</a>
			</HamburguerItem>
		</HamburguerStyle>
	);
}
