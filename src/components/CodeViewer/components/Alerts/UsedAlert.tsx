import { AlertStyles } from './Alert.styles';
import { MdOutlineDangerous } from 'react-icons/md';

export default function UsedAlert() {
	return (
		<AlertStyles alertType="DEPRECATED">
			<span className="alert-text">
				<MdOutlineDangerous className="icon" />
				Obsoleto: Este código de status está obsoleto. Quando usado, os clientes
				ainda podem aceitá-lo, mas simplesmente ignorá-los.
			</span>
		</AlertStyles>
	);
}
