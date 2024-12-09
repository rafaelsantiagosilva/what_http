import { AlertStyles } from './Alert.styles';
import { TbError404 } from "react-icons/tb";

export default function OficialAlert() {
	return (
		<AlertStyles alertType="UNOFFICIAL">
			<span className="alert-text">
				<TbError404 className="icon" />
				Não oficial: Este código de status HTTP não é especificado por nenhum RFC.
			</span>
		</AlertStyles>
	);
}
