import { AlertStyles } from './Alert.styles';
import { RiAlertLine } from 'react-icons/ri';

export default function ExperimentalAlert() {
	return (
		<AlertStyles alertType="EXPERIMENTAL">
			<span className="alert-text">
				<RiAlertLine className="icon" />
				Experimental: Esta é uma tecnologia experimental. Verifique a
				compatibilidade do navegador antes de usar isso em produção.
			</span>
		</AlertStyles>
	);
}
