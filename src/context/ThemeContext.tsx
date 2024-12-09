import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextInterface {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextInterface | undefined>(
	undefined
);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const localStorageTheme = localStorage.getItem("theme") ?? "light";
	const initialIsDarkMode = localStorageTheme === "light" ? true : false;
	const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);

	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextInterface => {
	const context = useContext(ThemeContext);

	if (!context) throw new Error('useTheme must be used within a ThemeProvider');

	return context;
};
