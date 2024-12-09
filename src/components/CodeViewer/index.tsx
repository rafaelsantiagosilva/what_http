import { CodeViewerStyles } from './CodeViewer.styled';
import httpCodes from '../../http-codes/httpCodes';
import UsedAlert from './components/Alerts/UsedAlert';
import ExperimentalAlert from './components/Alerts/ExperimentalAlert';
import OficialAlert from './components/Alerts/OficialAlert';

interface CodeViewerProps {
	code: number;
}

export default function CodeViewer({ code }: CodeViewerProps) {
	const URL = 'https://http.cat/';
	const httpCode = httpCodes[code];

	return (
		<CodeViewerStyles>
			{code == 0 ? (
				<img
					className="cat-http"
					src={URL + String(code)}
					alt={`A image of a cat envolving the code ${code}`}
				/>
			) : !httpCode ? (
				<>
					<h2>Código não encontrado</h2>
					<img
						className="cat-http"
						src={URL + String(code)}
						alt={`A image of a cat envolving the code ${code}`}
					/>
				</>
			) : (
				<>
					{!httpCode.used && <UsedAlert />}
					{httpCode.experimental && <ExperimentalAlert />}
					{!httpCode.official && <OficialAlert />}
					<h2>
						{code}
						{': '}
						{httpCode.name}
					</h2>
					<img
						className="cat-http"
						src={URL + String(code)}
						alt={`A image of a cat envolving the code ${code}`}
					/>
					<p>{httpCode.description}</p>
				</>
			)}
		</CodeViewerStyles>
	);
}
