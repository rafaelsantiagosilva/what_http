import { ArticleStyles } from './Article.styled';

export default function Article() {
	return (
		<ArticleStyles>
			<h1 className="main-title">O que são códigos http?</h1>
			<p>
				Códigos HTTP (ou códigos de status HTTP) são respostas padronizadas enviadas
				por servidores web para informar o cliente (como navegadores ou outras
				aplicações) sobre o resultado de uma solicitação feita através do protocolo
				HTTP. Eles são importantes para a comunicação entre o cliente e o servidor,
				indicando se a solicitação foi bem-sucedida, se houve algum erro ou se é
				necessário alguma ação adicional.
			</p>
			<p>
				Os códigos HTTP são numéricos e divididos em cinco classes principais, cada
				uma com um propósito específico:
			</p>
			<ul className='errors-types'>
				<li>1XX - Informativo</li>
				<li>2XX - Sucesso</li>
				<li>3XX - Redirecionamento</li>
				<li>4XX - Erros do Cliente</li>
				<li>5XX - Erros do Servidor</li>
			</ul>
		</ArticleStyles>
	);
}
