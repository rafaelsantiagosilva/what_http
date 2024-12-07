interface HttpCode {
  name: string;
  description: string;
  used: boolean;
  experimental: boolean;
  oficial: boolean;
}

const httpCodes: Record<string, HttpCode> = {
  "100": {
    name: "Continuar",
    description: "O código de resposta de status informativo HTTP 100 Continue indica que tudo está OK até agora e que o cliente deve continuar com a solicitação ou ignorá-la se ela já tiver sido concluída.",
    used: true,
    experimental: false,
    oficial: false
  },
  "101": {
    name: "Protocolos de comutação",
    description: "O código de resposta HTTP 101 Switching Protocol sindica um protocolo para o qual o servidor alterna. O protocolo é especificado no cabeçalho de solicitação Upgrade recebido de um cliente.",
    used: true,
    experimental: false,
    oficial: false
  },
  "102": {
    name: "Processamento",
    description: "O código de resposta de status informativo HTTP 102 Processing indica ao cliente que uma solicitação completa foi recebida e o servidor está trabalhando nela.",
    used: false,
    experimental: false,
    oficial: false
  },
  "103": {
    name: "Dicas iniciais",
    description: "103 Early Hints A resposta de informações HTTP pode ser enviada por um servidor enquanto ele ainda está preparando uma resposta, com dicas sobre os recursos que o servidor espera que a resposta final vincule.<br/> Isso permite que um navegador comece a pré-carregar recursos antes mesmo que o servidor tenha preparado e enviado a resposta final.",
    used: true,
    experimental: true,
    oficial: false
  },
  "200": {
    name: "OK",
    description: "O código de resposta de status de sucesso HTTP 200 OK indica que a solicitação foi bem-sucedida. Uma resposta 200 é armazenável em cache por padrão.",
    used: true,
    experimental: false,
    oficial: false
  },
  "201": {
    name: "Criado",
    description: "O código de resposta de status de sucesso HTTP 201 Created indica que a solicitação foi bem-sucedida e levou à criação de um recurso.",
    used: true,
    experimental: false,
    oficial: false
  },
  "202": {
    name: "Aceito",
    description: "O código de status de resposta HTTP 202 Accepted indica que a solicitação foi aceita para processamento, mas o processamento não foi concluído; na verdade, o processamento pode não ter começado ainda.",
    used: true,
    experimental: false,
    oficial: false
  },
  "203": {
    name: "Informações não autorizadas",
    description: "O status da resposta HTTP 203 Non-Authoritative Information indica que a solicitação foi bem-sucedida, mas a carga útil incluída foi modificada por um proxy de transformação daquela da 200 OKresposta do servidor de origem.",
    used: true,
    experimental: false,
    oficial: false
  },
  "204": {
    name: "Nenhum conteúdo",
    description: "O código de resposta de status de sucesso HTTP 204 No Content indica que uma solicitação foi bem-sucedida, mas que o cliente não precisa sair da página atual.",
    used: true,
    experimental: false,
    oficial: false
  },
  "205": {
    name: "Redefinir conteúdo",
    description: "O status da resposta HTTP 205 Reset Content informa ao cliente para redefinir a visualização do documento (ou seja, limpar o conteúdo de um formulário, redefinir o estado da tela ou a interface do usuário).",
    used: true,
    experimental: false,
    oficial: false
  },
  "206": {
    name: "Conteúdo parcial",
    description: "O código de resposta de status de sucesso HTTP 206 Partial Content indica que a solicitação foi bem-sucedida e o corpo contém os intervalos de dados solicitados, conforme descrito no cabeçalho Range da solicitação.",
    used: true,
    experimental: false,
    oficial: false
  },
  "207": {
    name: "Multi-Status",
    description: "O 207 Multi-Status código de resposta HTTP indica que pode haver uma mistura de respostas.",
    used: true,
    experimental: false,
    oficial: false
  },
  "208": {
    name: "Já relatados",
    description: "O status de resposta HTTP 208 Already Reported é usado em uma resposta 207 Multi-Status para economizar espaço e evitar conflitos. Se o mesmo recurso for solicitado várias vezes (por exemplo, como parte de uma coleção), com caminhos diferentes, apenas o primeiro será relatado com 200 . As respostas para todas as outras ligações serão relatadas com este código de status 208 , portanto, nenhum conflito será criado e a resposta permanecerá mais curta.",
    used: true,
    experimental: false,
    oficial: false
  },
  "214": {
    name: "Transformação Aplicada",
    description: "O HTTP 214 Transformation Applied é um código de status não oficial usado em combinação com o cabeçalho HTTP Warning e incluído com mensagens de resposta HTTP para indicar que uma transformação foi aplicada à representação.",
    used: false,
    experimental: false,
    oficial: false
  },
  "226": {
    name: "IM Usado",
    description: "O 226 IM Used status de resposta HTTP, no contexto de codificações delta, é um código de status definido pelo servidor para indicar que ele está retornando um delta para a solicitação GET que recebeu. IM significa Instance Manipulations , o termo usado para descrever um algoritmo que gera um delta.",
    used: true,
    experimental: false,
    oficial: false
  },
}

export default httpCodes;