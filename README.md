# Frontend-PublicOffer-testmode :flags:

### Início

<hr>

Fala pessoal, esta é a parte frontend da elaboração de um sistema que irá gerenciar ordens de ofertas públicas de ativos financeiros.

Vocês podem ver a parte backend por meio deste link: https://github.com/Amorim-cyber/Backend-PublicOffer-testmode

A oferta pública é basicamente uma proposta de negócio, e existem vários tipos. Contudo não vou me estender a tecnicalidades, aqui neste projeto irei falar apenas da mais conhecida: o IPO.

Sendo bem breve IPO (*Initial Public Offering*)  é um tipo de oferta pública na qual as ações de uma empresa geralmente são vendidas a investidores institucionais, os quais, por sua vez, vendem essas ações ao público em geral, em bolsa de valores pela primeira vez.

Portanto, a motivação desse projeto é criar um controle de reservas para IPOs.

### Modelo de negócios

<hr>


Aqui no nosso projeto vamos entrar na pele de uma instituição financeira que comprou as ações de uma empresa fictícia chamada *Grupo XPTO Logística*. Ela irá fazer a sua oferta pública para o mercado.

Vamos supor que nossa instituição domine esse mercado.

Beleza, vamos simplificar ainda mais: Vamos supor também que nossa instituição tenha apenas três funcionários, o agente A do código 11111, o agente B do código 22222 e o executor de ordens C. 

A e B são responsáveis por assessorar financeiramente todos clientes enquanto o C fica responsável pelo operacional.

Caso algum cliente tenha interesse de participar desse IPO de Grupo XPTO, ele deve notificar A ou B, estes por sua vez irão mandar um pedido para C fazer a reserva. 

Ao efetuar a reserva, C notifica A ou B, que por sua vez avisa o cliente.

Este será o modelo que vamos tentar aplicar no projeto.

### TRILHA

<hr>

Vou deixar aqui notas com mais detalhes de cada commit do projeto.

<div style="background-color: #E8E8E8; border-radius: 3px;">
   <p><strong>INITIAL COMMIT</strong></p>
    <ul>
        <li><strong>PARTE 1:</strong> Commit inicial que o angular cria por default</li>
    </ul>
    <br>
</div>

<div style="background-color: #E8E8E8; border-radius: 3px;">
   <p><strong>ESTRUTURANDO OS COMPONENTES INICIAIS</strong></p>
    <ul>
        <li><strong>PARTE 2:</strong> Criando os componentes front-view que será a visão dos agentes de seus requests, back-view que será a visão do executor dos requests e um componente para navegação. Também foi criado as rotas das páginas e alguns elementos HTML</li>
    </ul>
    <br>
</div>
<div style="background-color: #E8E8E8; border-radius: 3px;">
   <p><strong>INCLUINDO O MÉTODO HTTP GET NAS PÁGINAS</strong></p>
    <ul>
        <li><strong>PARTE 3:</strong> Criado o model Request e o arquivo de service da aplicação. Incluido método getAll que retorna todas as requests e o metodo getAllByAgentId que retorna todas as requests criadas por um determinado agente</li>
    </ul>
    <br>
</div>


