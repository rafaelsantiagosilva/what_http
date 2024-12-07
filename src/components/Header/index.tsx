import { FormEvent } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HeaderStyle } from './Header.styled';

export interface HeaderProps {
	isDarkTheme: boolean;
	toggleTheme: () => void;
	setIsHamburguerOpen: (isHamburguerOpen: true) => void;
	userInput: string;
	setUserInput: (userInput: string) => void;
	setHttpCode: (code: number) => void;
}

export default function Header({
	isDarkTheme,
	toggleTheme,
	setIsHamburguerOpen,
	userInput,
	setUserInput,
	setHttpCode,
}: HeaderProps) {
	const receiveUserInput = (newUserInput: string) => {
		const NEW_USER_INPUT_LENGTH = newUserInput.length;

		if (NEW_USER_INPUT_LENGTH > 3) return;

		const LAST_STRING_INDEX = NEW_USER_INPUT_LENGTH - 1;
		const LAST_STRING_CHAR = newUserInput[LAST_STRING_INDEX];

		if (isNaN(Number(LAST_STRING_CHAR)) && LAST_STRING_CHAR != undefined) return;

		setUserInput(newUserInput);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setHttpCode(Number(userInput));
	};

	return (
		<HeaderStyle>
			<a className="logo" href="#">
				<AiOutlineGlobal className="main-icon" />
				<h1 className="main-title">What HTTP?</h1>
			</a>
			<form className="link-to-search" onSubmit={handleSubmit}>
				<IoSearchSharp />
				<input
					className="input-search-code"
					placeholder="Insira um código"
					value={userInput}
					onChange={(e) => receiveUserInput(e.target.value)}
					type="text"
				></input>
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
