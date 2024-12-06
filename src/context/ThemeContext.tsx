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
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
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
