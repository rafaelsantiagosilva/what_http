import { CodeViewerStyles } from './CodeViewer.styled';

interface CodeViewerProps {
	code: number;
}

export default function CodeViewer({ code }: CodeViewerProps) {
	const URL = 'https://http.cat/';
	return (
		<CodeViewerStyles>
			<img
				className="cat-http"
				src={URL + String(code)}
				alt={`A image of a cat envolving the code ${code}`}
			/>
		</CodeViewerStyles>
	);
}
