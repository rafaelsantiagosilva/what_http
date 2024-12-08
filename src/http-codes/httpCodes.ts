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
    description: "103 Early Hints A resposta de informações HTTP pode ser enviada por um servidor enquanto ele ainda está preparando uma resposta, com dicas sobre os recursos que o servidor espera que a resposta final vincule. Isso permite que um navegador comece a pré-carregar recursos antes mesmo que o servidor tenha preparado e enviado a resposta final.",
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
    description: "O status da resposta HTTP 203 Non-Authoritative Information indica que a solicitação foi bem-sucedida, mas a carga útil incluída foi modificada por um proxy de transformação daquela da 200 OK resposta do servidor de origem.",
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
    description: "O 226 IM Used status de resposta HTTP, no contexto de codificações delta, é um código de status definido pelo servidor para indicar que ele está retornando um delta para a solicitação GET que recebeu. IM significa Instance Manipulations, o termo usado para descrever um algoritmo que gera um delta.",
    used: true,
    experimental: false,
    oficial: false
  },
  "300": {
    name: "Escolhas múltiplas",
    description: "O código de resposta de status de redirecionamento HTTP 300 Multiple Choices indica que a solicitação tem mais de uma resposta possível. O agente do usuário ou o usuário deve escolher um deles.",
    used: true,
    experimental: false,
    oficial: true
  },
  "301": {
    name: "Movido permanentemente",
    description: "O 301 Moved Permanently código de resposta de status de redirecionamento HTTP indica que o recurso solicitado foi definitivamente movido para a URL fornecida pelos Location cabeçalhos. Um navegador redireciona para a nova URL e os mecanismos de busca atualizam seus links para o recurso.",
    used: true,
    experimental: false,
    oficial: true
  },
  "302": {
    name: "Encontrado",
    description: "O código de resposta de status de redirecionamento HTTP 302 Found indica que o recurso solicitado foi temporariamente movido para a URL fornecida pelo Location cabeçalho. Um navegador redireciona para esta página, mas os mecanismos de busca não atualizam seus links para o recurso (em 'SEO-speak', diz-se que o 'link-juice' não é enviado para a nova URL).",
    used: true,
    experimental: false,
    oficial: true
  },
  "303": {
    name: "Ver outros",
    description: "O código de resposta de status de redirecionamento HTTP 303 See Other indica que os redirecionamentos não vinculam ao recurso solicitado em si, mas a outra página (como uma página de confirmação, uma representação de um objeto do mundo real — consulte HTTP range-14 — ou uma página de progresso de upload).",
    used: true,
    experimental: false,
    oficial: true
  },
  "304": {
    name: "Não modificado",
    description: "O código de resposta de redirecionamento do cliente HTTP 304 Not Modified indica que não há necessidade de retransmitir os recursos solicitados. É um redirecionamento implícito para um recurso em cache. Isso acontece quando o método de solicitação é um método seguro, como GET or HEAD, ou quando a solicitação é condicional e usa um If-None-Match ou um If-Modified-Sincecabeçalho.",
    used: true,
    experimental: false,
    oficial: true
  },
  "305": {
    name: "Usar proxy",
    description: "O código de status de resposta HTTP 305 Use Proxy é um código de status HTTP obsoleto retornado por um servidor de origem para indicar que o recurso solicitado só pode ser acessado por meio de um servidor proxy.",
    used: false,
    experimental: false,
    oficial: true
  },
  "307": {
    name: "Redirecionamento temporário",
    description: "O código de resposta de status de redirecionamento HTTP 307 Temporary Redirect indica que o recurso solicitado foi movido temporariamente para a URL fornecida pelos Location cabeçalhos.",
    used: true,
    experimental: false,
    oficial: true
  },
  "308": {
    name: "Redirecionamento permanente",
    description: "O código de resposta de status de redirecionamento HTTP 308 Permanent Redirect indica que o recurso solicitado foi definitivamente movido para a URL fornecida pelos Location cabeçalhos. Um navegador redireciona para esta página e os mecanismos de busca atualizam seus links para o recurso (em 'SEO-speak', diz-se que o 'link-juice' é enviado para a nova URL).",
    used: true,
    experimental: false,
    oficial: true
  },
}

export default httpCodes;