import { GlobalStyles } from './styles/global.styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { lightTheme, darkTheme } from './styles/themes';
import Header from './components/Header/index';
import Footer from './components/Footer';
import HamburguerMenu from './components/HamburguerMenu';
import { useState } from 'react';
import Article from './components/Article';
import CodeViewer from './components/CodeViewer';

interface AppContentProps {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

function AppContent({ isDarkMode, toggleTheme }: AppContentProps) {
	const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);
	const [userInput, setUserInput] = useState('');
	const [httpCode, setHttpCode] = useState(0);

	return (
		<>
			{isHamburguerOpen && (
				<HamburguerMenu
					isDarkMode={isDarkMode}
					toggleTheme={toggleTheme}
					isHamburguerOpen
					setIsHamburguerOpen={setIsHamburguerOpen}
				/>
			)}
			<Header
				isDarkTheme={isDarkMode}
				toggleTheme={toggleTheme}
				setIsHamburguerOpen={setIsHamburguerOpen}
				userInput={userInput}
				setUserInput={setUserInput}
				setHttpCode={setHttpCode}
			/>
			<CodeViewer code={httpCode} />
			<Article />
			<Footer />
		</>
	);
}

export default function App() {
	const { isDarkMode, toggleTheme } = useTheme();
	const theme = isDarkMode ? darkTheme : lightTheme;

	return (
		<ThemeProvider>
			<StyledThemeProvider theme={theme}>
				<GlobalStyles theme={theme} />
				<AppContent isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
			</StyledThemeProvider>
		</ThemeProvider>
	);
}
