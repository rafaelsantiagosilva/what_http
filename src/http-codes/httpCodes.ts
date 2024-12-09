interface HttpCode {
  name: string;
  description: string;
  used: boolean;
  experimental: boolean;
  official: boolean;
}

const httpCodes: Record<string, HttpCode> = {
  "100": {
    name: "Continuar",
    description: "O código de resposta de status informativo HTTP 100 Continue indica que tudo está OK até agora e que o cliente deve continuar com a solicitação ou ignorá-la se ela já tiver sido concluída.",
    used: true,
    experimental: false,
    official: false
  },
  "101": {
    name: "Protocolos de comutação",
    description: "O código de resposta HTTP 101 Switching Protocol sindica um protocolo para o qual o servidor alterna. O protocolo é especificado no cabeçalho de solicitação Upgrade recebido de um cliente.",
    used: true,
    experimental: false,
    official: false
  },
  "102": {
    name: "Processamento",
    description: "O código de resposta de status informativo HTTP 102 Processing indica ao cliente que uma solicitação completa foi recebida e o servidor está trabalhando nela.",
    used: false,
    experimental: false,
    official: false
  },
  "103": {
    name: "Dicas iniciais",
    description: "103 Early Hints A resposta de informações HTTP pode ser enviada por um servidor enquanto ele ainda está preparando uma resposta, com dicas sobre os recursos que o servidor espera que a resposta final vincule. Isso permite que um navegador comece a pré-carregar recursos antes mesmo que o servidor tenha preparado e enviado a resposta final.",
    used: true,
    experimental: true,
    official: false
  },
  "200": {
    name: "OK",
    description: "O código de resposta de status de sucesso HTTP 200 OK indica que a solicitação foi bem-sucedida. Uma resposta 200 é armazenável em cache por padrão.",
    used: true,
    experimental: false,
    official: false
  },
  "201": {
    name: "Criado",
    description: "O código de resposta de status de sucesso HTTP 201 Created indica que a solicitação foi bem-sucedida e levou à criação de um recurso.",
    used: true,
    experimental: false,
    official: false
  },
  "202": {
    name: "Aceito",
    description: "O código de status de resposta HTTP 202 Accepted indica que a solicitação foi aceita para processamento, mas o processamento não foi concluído; na verdade, o processamento pode não ter começado ainda.",
    used: true,
    experimental: false,
    official: false
  },
  "203": {
    name: "Informações não autorizadas",
    description: "O status da resposta HTTP 203 Non-Authoritative Information indica que a solicitação foi bem-sucedida, mas a carga útil incluída foi modificada por um proxy de transformação daquela da 200 OK resposta do servidor de origem.",
    used: true,
    experimental: false,
    official: false
  },
  "204": {
    name: "Nenhum conteúdo",
    description: "O código de resposta de status de sucesso HTTP 204 No Content indica que uma solicitação foi bem-sucedida, mas que o cliente não precisa sair da página atual.",
    used: true,
    experimental: false,
    official: false
  },
  "205": {
    name: "Redefinir conteúdo",
    description: "O status da resposta HTTP 205 Reset Content informa ao cliente para redefinir a visualização do documento (ou seja, limpar o conteúdo de um formulário, redefinir o estado da tela ou a interface do usuário).",
    used: true,
    experimental: false,
    official: false
  },
  "206": {
    name: "Conteúdo parcial",
    description: "O código de resposta de status de sucesso HTTP 206 Partial Content indica que a solicitação foi bem-sucedida e o corpo contém os intervalos de dados solicitados, conforme descrito no cabeçalho Range da solicitação.",
    used: true,
    experimental: false,
    official: false
  },
  "207": {
    name: "Multi-Status",
    description: "O 207 Multi-Status código de resposta HTTP indica que pode haver uma mistura de respostas.",
    used: true,
    experimental: false,
    official: false
  },
  "208": {
    name: "Já relatados",
    description: "O status de resposta HTTP 208 Already Reported é usado em uma resposta 207 Multi-Status para economizar espaço e evitar conflitos. Se o mesmo recurso for solicitado várias vezes (por exemplo, como parte de uma coleção), com caminhos diferentes, apenas o primeiro será relatado com 200 . As respostas para todas as outras ligações serão relatadas com este código de status 208 , portanto, nenhum conflito será criado e a resposta permanecerá mais curta.",
    used: true,
    experimental: false,
    official: false
  },
  "214": {
    name: "Transformação Aplicada",
    description: "O HTTP 214 Transformation Applied é um código de status não official usado em combinação com o cabeçalho HTTP Warning e incluído com mensagens de resposta HTTP para indicar que uma transformação foi aplicada à representação.",
    used: false,
    experimental: false,
    official: false
  },
  "226": {
    name: "IM Usado",
    description: "O 226 IM Used status de resposta HTTP, no contexto de codificações delta, é um código de status definido pelo servidor para indicar que ele está retornando um delta para a solicitação GET que recebeu. IM significa Instance Manipulations, o termo usado para descrever um algoritmo que gera um delta.",
    used: true,
    experimental: false,
    official: false
  },
  "300": {
    name: "Escolhas múltiplas",
    description: "O código de resposta de status de redirecionamento HTTP 300 Multiple Choices indica que a solicitação tem mais de uma resposta possível. O agente do usuário ou o usuário deve escolher um deles.",
    used: true,
    experimental: false,
    official: true
  },
  "301": {
    name: "Movido permanentemente",
    description: "O 301 Moved Permanently código de resposta de status de redirecionamento HTTP indica que o recurso solicitado foi definitivamente movido para a URL fornecida pelos Location cabeçalhos. Um navegador redireciona para a nova URL e os mecanismos de busca atualizam seus links para o recurso.",
    used: true,
    experimental: false,
    official: true
  },
  "302": {
    name: "Encontrado",
    description: "O código de resposta de status de redirecionamento HTTP 302 Found indica que o recurso solicitado foi temporariamente movido para a URL fornecida pelo Location cabeçalho. Um navegador redireciona para esta página, mas os mecanismos de busca não atualizam seus links para o recurso (em 'SEO-speak', diz-se que o 'link-juice' não é enviado para a nova URL).",
    used: true,
    experimental: false,
    official: true
  },
  "303": {
    name: "Ver outros",
    description: "O código de resposta de status de redirecionamento HTTP 303 See Other indica que os redirecionamentos não vinculam ao recurso solicitado em si, mas a outra página (como uma página de confirmação, uma representação de um objeto do mundo real — consulte HTTP range-14 — ou uma página de progresso de upload).",
    used: true,
    experimental: false,
    official: true
  },
  "304": {
    name: "Não modificado",
    description: "O código de resposta de redirecionamento do cliente HTTP 304 Not Modified indica que não há necessidade de retransmitir os recursos solicitados. É um redirecionamento implícito para um recurso em cache. Isso acontece quando o método de solicitação é um método seguro, como GET or HEAD, ou quando a solicitação é condicional e usa um If-None-Match ou um If-Modified-Sincecabeçalho.",
    used: true,
    experimental: false,
    official: true
  },
  "305": {
    name: "Usar proxy",
    description: "O código de status de resposta HTTP 305 Use Proxy é um código de status HTTP obsoleto retornado por um servidor de origem para indicar que o recurso solicitado só pode ser acessado por meio de um servidor proxy.",
    used: false,
    experimental: false,
    official: true
  },
  "307": {
    name: "Redirecionamento temporário",
    description: "O código de resposta de status de redirecionamento HTTP 307 Temporary Redirect indica que o recurso solicitado foi movido temporariamente para a URL fornecida pelos Location cabeçalhos.",
    used: true,
    experimental: false,
    official: true
  },
  "308": {
    name: "Redirecionamento permanente",
    description: "O código de resposta de status de redirecionamento HTTP 308 Permanent Redirect indica que o recurso solicitado foi definitivamente movido para a URL fornecida pelos Location cabeçalhos. Um navegador redireciona para esta página e os mecanismos de busca atualizam seus links para o recurso (em 'SEO-speak', diz-se que o 'link-juice' é enviado para a nova URL).",
    used: true,
    experimental: false,
    official: true
  },
  "400": {
    name: "Pedido ruim",
    description: "O código de status de resposta HTTP 400 Bad Request indica que o servidor não pode ou não processará a solicitação devido a algo que é percebido como um erro do cliente (por exemplo, sintaxe de solicitação malformada, enquadramento de mensagem de solicitação inválido ou roteamento de solicitação enganoso).",
    used: true,
    experimental: false,
    official: true
  },
  "401": {
    name: "Não autorizado",
    description: "O 401 Unauthorized código de status de resposta HTTP indica que a solicitação do cliente não foi concluída porque não há credenciais de autenticação válidas para o recurso solicitado.",
    used: true,
    experimental: false,
    official: true
  },
  "402": {
    name: "Pagamento necessário",
    description: "O HTTP 402 Payment Required é um código de status de resposta não padrão que é reservado para uso futuro. Este código de status foi criado para habilitar dinheiro digital ou sistemas de pagamento (micro) e indicaria que o conteúdo solicitado não está disponível até que o cliente faça um pagamento.",
    used: true,
    experimental: true,
    official: true,
  },
  "403": {
    name: "Proibido",
    description: "O código de status de resposta HTTP 403 Forbidden indica que o servidor entende a solicitação, mas se recusa a autorizá-la.",
    used: true,
    experimental: false,
    official: true
  },
  "404": {
    name: "Não encontrado",
    description: "O código de status de resposta HTTP 404 Not Found indica que o servidor não consegue encontrar o recurso solicitado. Links que levam a uma página 404 são frequentemente chamados de links quebrados ou mortos e podem estar sujeitos a link rot.",
    used: true,
    experimental: false,
    official: true
  },
  "405": {
    name: "Não permitido",
    description: "O 405 Method Not Allowed código de status de resposta HTTP indica que o servidor conhece o método de solicitação, mas o recurso de destino não oferece suporte a esse método.",
    used: true,
    experimental: false,
    official: true
  },
  "406": {
    name: "Não aceitável",
    description: "O código de resposta de erro do cliente HTTP 406 Not Acceptable indica que o servidor não pode produzir uma resposta correspondente à lista de valores aceitáveis ​​definidos nos cabeçalhos de negociação de conteúdo proativo da solicitação e que o servidor não está disposto a fornecer uma representação padrão.",
    used: true,
    experimental: false,
    official: true
  },
  "407": {
    name: "Autenticação de proxy necessária",
    description: "O código de resposta de status de erro do cliente HTTP 407 Proxy Authentication Required indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para um servidor proxy que está entre o navegador e o servidor que pode acessar o recurso solicitado.",
    used: true,
    experimental: false,
    official: true
  },
  "408": {
    name: "Tempo limite de solicitação",
    description: "O 408 Request Timeout código de status de resposta HTTP significa que o servidor gostaria de desligar esta conexão não utilizada. Ele é enviado em uma conexão ociosa por alguns servidores, mesmo sem nenhuma solicitação anterior do cliente.",
    used: true,
    experimental: false,
    official: true
  },
  "409": {
    name: "Conflito",
    description: "O 409 Conflict código de status de resposta HTTP indica um conflito de solicitação com o estado atual do recurso de destino.",
    used: true,
    experimental: false,
    official: true
  },
  "410": {
    name: "Perdido",
    description: "O código de resposta de erro do cliente HTTP 410 Gone indica que o acesso ao recurso de destino não está mais disponível no servidor de origem e que essa condição provavelmente será permanente.",
    used: true,
    experimental: false,
    official: true
  },
  "411": {
    name: "Comprimento necessário",
    description: "O 411 Length Required código de resposta de erro do cliente HTTP indica que o servidor se recusa a aceitar a solicitação sem um cabeçalho definido Content-Length.",
    used: true,
    experimental: false,
    official: true
  },
  "412": {
    name: "Pré-condição falhou",
    description: "O código de resposta de erro do cliente HTTP 412 Precondition Failed indica que o acesso ao recurso de destino foi negado. Isso acontece com solicitações condicionais em métodos diferentes de GET ou HEAD quando a condição definida pelos cabeçalhos If-Unmodified-Since ou If-None-Match não é atendida. Nesse caso, a solicitação, geralmente um upload ou uma modificação de um recurso, não pode ser feita e essa resposta de erro é enviada de volta.",
    used: true,
    experimental: false,
    official: true
  },
  "413": {
    name: "Carga útil muito grande",
    description: "O código de status de resposta HTTP 413 Content Too Large indica que a entidade da solicitação é maior que os limites definidos pelo servidor; o servidor pode fechar a conexão ou retornar um Retry-After campo de cabeçalho.",
    used: true,
    experimental: false,
    official: true
  },
  "414": {
    name: "Solicitação-URI muito longa",
    description: "O código de status de resposta HTTP 414 URI Too Long indica que o URI solicitado pelo cliente é maior do que o servidor está disposto a interpretar.",
    used: true,
    experimental: false,
    official: true
  },
  "415": {
    name: "Tipo de mídia não suportado",
    description: "O 415 Unsupported Media Typecódigo de resposta de erro do cliente HTTP indica que o servidor se recusa a aceitar a solicitação porque o formato da carga útil está em um formato não suportado.",
    used: true,
    experimental: false,
    official: true
  },
  "416": {
    name: "Intervalo de solicitação não satisfatório",
    description: "O código de resposta de erro HTTP 416 Range Not Satisfiable indica que um servidor não pode servir os intervalos solicitados. O motivo mais provável é que o documento não contém tais intervalos, ou que o valor do cabeçalho Range, embora sintaticamente correto, não faz sentido.",
    used: true,
    experimental: false,
    official: true
  },
  "417": {
    name: "Expectativa falhou",
    description: "O 417 Expectation Failed código de resposta de erro do cliente HTTP indica que a expectativa fornecida no Expect cabeçalho da solicitação não pôde ser atendida.",
    used: true,
    experimental: false,
    official: true
  },
  "418": {
    name: "Eu sou um bule de chá",
    description: "O 418 I'm a teapot código de resposta de erro do cliente HTTP indica que o servidor se recusa a preparar café porque ele é, permanentemente, um bule de chá. Uma cafeteira/chaleira combinada que esteja temporariamente sem café deve retornar 503. Este erro é uma referência ao Protocolo de Controle de Cafeteiras de Hipertexto definido nas piadas de 1º de abril de 1998 e 2014. Alguns sites usam essa resposta para solicitações que não desejam processar, como consultas automatizadas.",
    used: true,
    experimental: false,
    official: true
  },
  "420": {
    name: "Fique mais calmo",
    description: "O código de status de resposta HTTP 420 Method Failure e 420 Enhance your calm são códigos de status HTTP não oficiais que são retornados pelo servidor para indicar um erro do cliente. Quando enviado pelo Spring Framework, ele indica que um método falhou, enquanto quando enviado pelo Twitter, ele indica que o cliente está sendo limitado por fazer muitas solicitações.",
    used: true,
    experimental: false,
    official: false
  },
  "421": {
    name: "Pedido mal direcionado",
    description: "O código de resposta de erro do cliente HTTP 421 Misdirected Request indica que a solicitação foi direcionada a um servidor que não é capaz de produzir uma resposta. Isso pode ser possível se uma conexão for reutilizada ou se um serviço alternativo for selecionado.",
    used: true,
    experimental: false,
    official: true
  },
  "422": {
    name: "Entidade não processável",
    description: "O código de status de resposta HTTP 422 Unprocessable Content indica que o servidor entende o tipo de conteúdo da entidade de solicitação e a sintaxe da entidade de solicitação está correta, mas não conseguiu processar as instruções contidas.",
    used: true,
    experimental: false,
    official: true
  },
  "423": {
    name: "Bloqueado",
    description: "O código de resposta de erro HTTP 423 Locked indica que os recursos provisoriamente visados ​​por estão bloqueados, o que significa que não podem ser acessados. Seu conteúdo deve conter algumas informações no formato XML do WebDAV.",
    used: true,
    experimental: false,
    official: true
  },
  "424": {
    name: "Dependência com falha",
    description: "O código de resposta de erro do cliente HTTP 424 Failed Dependency indica que o método não pôde ser executado no recurso porque a ação solicitada dependia de outra ação, e essa ação falhou.",
    used: true,
    experimental: false,
    official: true
  },
  "425": {
    name: "Muito cedo",
    description: "O código de status de resposta HTTP 425 Too Early indica que o servidor não está disposto a correr o risco de processar uma solicitação que pode ser repetida, o que cria o potencial para um ataque de repetição.",
    used: true,
    experimental: false,
    official: true
  },
  "426": {
    name: "Atualização necessária",
    description: "O código de resposta de erro do cliente HTTP 426 Upgrade Required indica que o servidor se recusa a executar a solicitação usando o protocolo atual, mas pode estar disposto a fazê-lo depois que o cliente atualizar para um protocolo diferente.",
    used: true,
    experimental: false,
    official: true
  },
  "428": {
    name: "Pré-condição necessária",
    description: "O 428 Precondition Required código de status de resposta HTTP indica que o servidor exige que a solicitação seja condicional.",
    used: true,
    experimental: false,
    official: true
  },
  "429": {
    name: "Muitas solicitações",
    description: "O código de status de resposta HTTP 429 Too Many Requests indica que o usuário enviou muitas solicitações em um determinado período de tempo ('limitação de taxa').",
    used: true,
    experimental: false,
    official: true
  },
  "431": {
    name: "Campos de cabeçalho de solicitação muito grandes",
    description: "O 431 Request Header Fields Too Large código de status de resposta HTTP indica que o servidor se recusa a processar a solicitação porque os cabeçalhos HTTP da solicitação são muito longos. A solicitação pode ser reenviada após reduzir o tamanho dos cabeçalhos da solicitação.",
    used: true,
    experimental: false,
    official: true
  },
  "444": {
    name: "Sem resposta",
    description: "O código de status de resposta HTTP 444 No Response é um código de status HTTP não official específico para nginx e indica que a conexão HTTP está fechada. Nenhuma informação, nem mesmo este código de status, é enviada ao cliente.",
    used: true,
    experimental: false,
    official: false
  },
  "450": {
    name: "Bloqueado por controles parentais do Windows",
    description: "O código de status de resposta HTTP 450 Blocked by Windows Parental Control sé um código de status HTTP não official específico da Microsoft e retornado pelo servidor para indicar que os controles dos pais estão ativados e bloqueando o acesso ao recurso solicitado.",
    used: true,
    experimental: false,
    official: false
  },
  "451": {
    name: "Indisponível por motivos legais",
    description: "O código de resposta de erro do cliente HTTP 451 Unavailable For Legal Reasons indica que o usuário solicitou um recurso que não está disponível por motivos legais, como uma página da web para a qual uma ação legal foi emitida.",
    used: true,
    experimental: false,
    official: true
  },
  "495": {
    name: "Erro de certificado",
    description: "O HTTP 495 SSL Certificate Error é um erro de cliente não official específico do nginx e é retornado pelo servidor para indicar que houve um erro na verificação do certificado do cliente.",
    used: true,
    experimental: false,
    official: false
  },
  "496": {
    name: "Certificado SSL necessário",
    description: "O HTTP 496 SSL Certificate Error é um erro de cliente não official específico do nginx e é retornado pelo servidor para indicar que o cliente não apresentou o certificado necessário.",
    used: true,
    experimental: false,
    official: false
  },
  "497": {
    name: "Solicitação HTTP enviada para porta HTTPS",
    description: "O código de status de resposta HTTP 497 HTTP Request Sent to HTTPS Port é um código de status HTTP não official específico do nginx e é retornado pelo servidor para indicar que uma solicitação HTTP regular foi enviada para a porta HTTPS.",
    used: true,
    experimental: false,
    official: false
  },
  "498": {
    name: "Token expirado/inválido",
    description: "A resposta HTTP 498 Invalid Token é um código de status HTTP não official específico do ArcGIS e indica que a solicitação HTTP incluiu um token, mas não foi aceita.",
    used: true,
    experimental: false,
    official: false
  },
  "499": {
    name: "Solicitação do cliente fechada",
    description: "O código de status de resposta HTTP 499 é um código de status HTTP não official que é específico do ArcGIS com 499 Token Required e do nginx com 499 Client Closed Request.",
    used: true,
    experimental: false,
    official: false
  },
  "500": {
    name: "Erro interno do servidor",
    description: "O código de resposta de erro do servidor HTTP 500 Internal Server Error indica que o servidor encontrou uma condição inesperada que o impediu de atender à solicitação. Esta resposta de erro é uma resposta genérica 'catch-all'. Normalmente, isso indica que o servidor não consegue encontrar um 5xx código de erro melhor para responder.",
    used: true,
    experimental: false,
    official: true
  },
  "501": {
    name: "Não implementado",
    description: "O 501 Not Implemented código de resposta de erro do servidor HTTP significa que o servidor não suporta a funcionalidade necessária para atender à solicitação. Esse status também pode enviar um Retry-After cabeçalho, informando ao solicitante quando verificar novamente se a funcionalidade é suportada até então.",
    used: true,
    experimental: false,
    official: true
  },
  "502": {
    name: "Bad Gateway",
    description: "O código de resposta de erro do servidor HTTP 502 Bad Gateway indica que o servidor, enquanto atuava como um gateway ou proxy, recebeu uma resposta inválida do servidor upstream.",
    used: true,
    experimental: false,
    official: true
  },
  "503": {
    name: "Serviço indisponível",
    description: "O 503 Service Unavailable código de resposta de erro do servidor HTTP indica que o servidor não está pronto para lidar com a solicitação.Causas comuns são um servidor que está inativo para manutenção ou que está sobrecarregado. Esta resposta deve ser usada para condições temporárias e o Retry-After cabeçalho HTTP deve, se possível, conter o tempo estimado para a recuperação do serviço.",
    used: true,
    experimental: false,
    official: true
  },
  "504": {
    name: "Tempo limite do gateway",
    description: "O código de resposta de erro do servidor HTTP 504 Gateway Timeout indica que o servidor, embora atuando como gateway ou proxy, não obteve uma resposta a tempo do servidor upstream necessária para concluir a solicitação.",
    used: true,
    experimental: false,
    official: true
  },
  "506": {
    name: "Variante também negocia",
    description: "O 506 Variant Also Negotiates código de status de resposta HTTP pode ser fornecido no contexto de Negociação de Conteúdo Transparente (consulte RFC 2295). Este protocolo permite que um cliente recupere a melhor variante de um determinado recurso, onde o servidor suporta múltiplas variantes.",
    used: true,
    experimental: false,
    official: true  
  },
  "507": {
    name: "Armazenamento insuficiente",
    description: "O 507 Insufficient Storage código de status de resposta HTTP pode ser fornecido no contexto do protocolo WebDAV (consulte RFC 4918). Indica que um método não pôde ser executado porque o servidor não pode armazenar a representação necessária para concluir a solicitação com sucesso.",
    used: true,
    experimental: false,
    official: true
  },
  "508": {
    name: "Loop detectado",
    description: "O 508 Loop Detected código de status de resposta HTTP pode ser fornecido no contexto do protocolo WebDAV. Indica que o servidor encerrou uma operação porque encontrou um loop infinito ao processar uma solicitação com \"Depth: infinity\". Este status indica que toda a operação falhou.",
    used: true,
    experimental: false,
    official: true
  },
  "509": {
    name: "Limite de largura de banda excedido",
    description: "O código de status de resposta HTTP 509 Bandwidth Limit Exceeded é um código de status HTTP não official específico do Apache Web Server e do cPanel que indica que o cliente de hospedagem web excedeu a cota de largura de banda no lado do servidor.",
    used: true,
    experimental: false,
    official: false
  },
  "510": {
    name: "Não estendido",
    description: "O 510 Not Extended código de status de resposta HTTP é enviado no contexto do HTTP Extension Framework, definido no RFC 2774.Nessa especificação, um cliente pode enviar uma solicitação que contém uma declaração de extensão, que descreve a extensão a ser usada. Se o servidor receber tal solicitação, mas quaisquer extensões descritas não forem suportadas para a solicitação, então o servidor responde com o 510código de status.",
    used: true,
    experimental: false,
    official: true
  },
  "511": {
    name: "Autenticação de rede necessária",
    description: "O código de status de resposta HTTP 511 Network Authentication Required indica que o cliente precisa se autenticar para obter acesso à rede. Esse status não é gerado pelos servidores de origem, mas pelos proxies de interceptação que controlam o acesso à rede.",
    used: true,
    experimental: false,
    official: true
  },
  "521": {
    name: "O servidor web está inativo",
    description: "O código de status de resposta HTTP 521 Web Server Is Down é um código de status HTTP não official específico do Cloudflare .",
    used: true,
    experimental: false,
    official: false
  },
  "522": {
    name: "Tempo limite de conexão esgotado",
    description: "O código de status de resposta HTTP 522 é um código de status HTTP não official específico do Cloudflare .O erro 522 ocorre quando o Cloudflare atinge o tempo limite de contato com o servidor web de origem. Dois tempos limite diferentes causam erro HTTP 522 dependendo de quando ocorrem entre o Cloudflare e o servidor web de origem: (1) Antes que uma conexão seja estabelecida, o servidor web de origem não retorna um SYN+ACK para o Cloudflare dentro de 15 segundos após o Cloudflare enviar um SYN. (2) Após o estabelecimento de uma conexão, o servidor web de origem não reconhece (ACK) a solicitação de recursos do Cloudflare em 90 segundos.",
    used: true,
    experimental: false,
    official: false
  },
  "523": {
    name: "Origem é inalcançável",
    description: "O código de status de resposta HTTP 523 Origin Is Unreachable é um código de status HTTP não official específico do Cloudflare . O erro 523 ocorre quando o Cloudflare não consegue contatar seu servidor web de origem. Isso geralmente ocorre quando um dispositivo de rede entre o Cloudflare e o servidor web de origem não tem uma rota para o endereço IP da origem.",
    used: true,
    experimental: false,
    official: false
  },
  "525": {
    name: "SSL Handshake falhou",
    description: "O código de status de resposta HTTP 525 SSL Handshake Failed é um código de status HTTP não official específico do Cloudflare . O erro 525 indica que o handshake SSL entre o Cloudflare e o servidor web de origem falhou. O erro 525 ocorre quando estas duas condições são verdadeiras: (1) O handshake SSL falha entre o Cloudflare e o servidor web de origem e (2) o SSL Completo ou Completo (Rigoroso) é definido na guia Visão geral do seu aplicativo SSL/TLS da Cloudflare.",
    used: true,
    experimental: false,
    official: false
  },
  "530": {
    name: "Site congelado",
    description: "O código de status de resposta HTTP 530 Site Frozen é um código de status HTTP não official específico do Cloudflare e do Pantheon. O primeiro usa quando há um erro entre um usuário e um servidor web, e o segundo usa quando um Sandbox Site inativo nega solicitações HTTP.",
    used: true,
    experimental: false,
    official: false
  },
  "599": {
    name: "Erro de tempo limite de conexão de rede",
    description: "O código de status de resposta HTTP 599 Network Connect Timeout Error é um código de status HTTP não official usado por alguns proxies para sinalizar um tempo limite de conexão de rede atrás do proxy para um cliente na frente do proxy.",
    used: true,
    experimental: false,
    official: false
  }
}

export default httpCodes;