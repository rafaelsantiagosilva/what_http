import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { ThemeProvider } from './context/ThemeContext'; // Importando o ThemeProvider

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			{' '}
			{/* Envolvendo o App com o ThemeProvider */}
			<App />
		</ThemeProvider>
	</StrictMode>
);
