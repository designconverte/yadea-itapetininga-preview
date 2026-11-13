/* ==========================================================================
   YADEA ITAPETININGA · configuração da unidade
   --------------------------------------------------------------------------
   ÚNICO lugar onde moram os dados desta loja. O HTML, o app.js e o build
   (tools/gerar-seo.js) leem daqui. Para criar outra unidade,
   este é o primeiro arquivo a trocar — ver README, "Nova unidade".

   Fonte: yadeaitapetininga.com.br (WordPress atual), coletado em 13/11/2026.
   O site foi copiado do de Sorocaba (workspace yadea-sorocaba, que saiu do
   de Campinas), com a mesma campanha (Black November até 30/11).
   ========================================================================== */

window.YADEA_CONFIG = {
  /* Identidade desta unidade. `id` entra no nome do repositório e no carimbo
     dos arquivos gerados; `cidade` aparece em títulos, textos e no JSON-LD. */
  unidade: {
    id: 'itapetininga',
    cidade: 'Itapetininga',
    uf: 'SP',
    regiao: 'Itapetininga e região',
  },

  /* Endereço público do site. Canonical, og:image, sitemap e JSON-LD saem
     daqui. A prévia (GitHub Pages) troca o host, mas mantém o canonical. */
  site: {
    url: 'https://yadeaitapetininga.com.br/',
    dominio: 'yadeaitapetininga.com.br',
    // Página institucional (o WordPress de Itapetininga só tem a home; gerada pelo build).
    paginaConcessionaria: 'concessionaria-yadea-itapetininga/',
  },

  marca: {
    nome: 'YADEA Itapetininga',
    nomeLoja: 'YADEA Itapetininga',
    // Como aparece no rodapé do site atual (lá, em caixa alta).
    razaoSocial: 'Almeida Lopes Comercio de Motos Eletricas LTDA',
    cnpj: '66.401.404/0001-03',
    /* Logos da assinatura local (styleguide: "nunca redesenhar nem recriar
       em texto"). SVGs do próprio site atual (wp-content/uploads/2026/05:
       Group-378 = negativo, Group-379 = positivo). */
    logoNegativo: 'assets/img/brand/logo-itapetininga-negativo.svg',
    logoPositivo: 'assets/img/brand/logo-itapetininga-positivo.svg',
  },

  /* Vendas e assistência usam o mesmo número no site atual (o link de
     assistência de lá está quebrado, mas aponta para o mesmo número). O
     rodapé de lá também lista (15) 99840-9041 como telefone, sem WhatsApp:
     fica de fora até a loja dizer o que é (README, pendências).
     `numero` é só para exibição; `e164` é o que entra no link do WhatsApp
     (api.whatsapp.com/send: ver render.js). */
  whatsapp: {
    numero: '(15) 99690-9120',
    e164: '5515996909120',
  },
  assistencia: {
    numero: '(15) 99690-9120',
    e164: '5515996909120',
  },
  telefone: '+55 15 99690-9120',
  /* Segundo contato de vendas, SÓ no rodapé e só para ligação (pedido do
     usuário em 13/11/2026; no site antigo, o tel: abaixo do de vendas). Vazio
     ou apagado = some do rodapé. */
  vendasTelefone: {
    numero: '(15) 99840-9041',
    e164: '5515998409041',
  },

  /* Formas de pagamento da loja. O FAQ ("Quais são as formas de pagamento")
     responde exatamente esta lista, nada além. Confirmado pela loja em
     11/11/2026: só Pix, parcelamento no cartão de crédito e financiamento (padrão do
     grupo). O site antigo de Itapetininga ainda cita carteira digital e
     consórcio.
     `naoAceitas`: o build (gerar-seo.js) para se alguma delas aparecer em
     qualquer página ou no llms.txt. O site antigo citava consórcio e
     carteira digital, e o cliente reclamou. Nova unidade: confirmar a lista
     com a loja antes de publicar. */
  pagamento: {
    formas: ['Pix', 'parcelamento no cartão de crédito', 'financiamento'],
    naoAceitas: ['consórcio', 'carteira digital'],
  },

  endereco: {
    logradouro: 'R. Quintino Bocaiúva, 856',
    complemento: '',
    bairro: 'Centro',
    cidade: 'Itapetininga',
    uf: 'SP',
    // O site não mostra o CEP; este é o da rua nos Correios (ViaCEP, 13/11/2026).
    cep: '18200-014',
    get completo() {
      return `${this.logradouro} · ${this.bairro}, ${this.cidade} - ${this.uf} · ${this.cep}`;
    },
    // Usado no link "traçar rota" e no mapa.
    get busca() {
      return `YADEA Itapetininga, ${this.logradouro}, ${this.bairro}, ${this.cidade} - ${this.uf}, ${this.cep}`;
    },
  },

  /* Horários do site atual (um só, no bloco da Central de Vendas). Enquanto
     `confirmado` for false, o rodapé mostra "consulte pelo WhatsApp" em vez
     de um horário que pode estar errado. `assistencia` vazio = mostra o de
     vendas (a confirmar com a loja: README, pendências). `json` alimenta o
     openingHoursSpecification do JSON-LD. */
  horarios: {
    confirmado: true,
    vendas: 'Dias úteis: 9h às 18h · Sáb. e feriados: 9h às 13h',
    assistencia: 'Dias úteis: 9h às 18h',
    json: [
      { dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '09:00', fecha: '18:00' },
      { dias: ['Saturday'], abre: '09:00', fecha: '13:00' },
    ],
  },

  /* O site atual não tem link de rede social. Preenchido, o ícone aparece no
     header, no menu e no rodapé; vazio, some (nada de link para "#"). */
  redes: {
    instagram: '',
    instagramUsuario: '',
  },

  /* ── Medição de Itapetininga (decisão do usuário, 13/11/2026) ────────
     SEM GTM, como Sorocaba: gtag direto no GA4 G-C3MY9FMRKF e o Pixel da Meta
     2155217421703827 (só com aceite), IDs no <html> dos moldes. Google Ads
     ainda NÃO: o Kaio (loja) confirma com o tráfego; quando vier, é o
     `data-aw` dos moldes e o AW do publicar-hostinger.sh. O WordPress usava o
     GTM-5QG7S2H6 (o de Campinas), que fica de fora. `medicao` null: o
     PixelYourSite de lá não mandava evento com nome próprio, então não há
     nome antigo a manter. */
  medicao: null,

  /* ── Comunicado de segurança ──────────────────────────────────────────
     Aviso discreto de "único site oficial" + lista de domínios não
     reconhecidos. Nenhum domínio falso relatado: fica DESLIGADO. Para ligar,
     ver README, "Comunicado de segurança". */
  alertaSeguranca: {
    ativo: false,
    versao: '2026-11-13',
    siteOficial: 'yadeaitapetininga.com.br',
    dominiosNaoReconhecidos: [],
    atrasoMs: 2500,
    reexibirAposDias: 7,
  },

  /* Mensagens pré-preenchidas. Regra do styleguide: toda mensagem começa com
     "Olá! Vim pelo site…" — é como a equipe reconhece o lead que veio do
     site. `prefixoMensagem` garante isso até para mensagem nova escrita sem
     ele (render.js). `{modelo}`, `{cor}` e `{categoria}` são trocados no clique. */
  prefixoMensagem: 'Olá! Vim pelo site',
  mensagens: {
    geral: 'Olá! Vim pelo site e gostaria de saber mais sobre os modelos e condições especiais da YADEA Itapetininga.',
    modelo: 'Olá! Vim pelo site e gostaria de saber mais sobre o modelo {modelo}.',
    modeloCor: 'Olá! Vim pelo site e gostaria de saber mais sobre o modelo {modelo} na cor {cor}.',
    testRideGeral: 'Olá! Vim pelo site e gostaria de agendar um test ride na YADEA Itapetininga.',
    testRideModelo: 'Olá! Vim pelo site e gostaria de agendar um test ride do modelo {modelo}.',
    testRideModeloCor: 'Olá! Vim pelo site e gostaria de agendar um test ride do modelo {modelo} na cor {cor}.',
    assistencia: 'Olá! Vim pelo site e gostaria de falar com a assistência técnica da YADEA Itapetininga.',
    categoria: 'Olá! Vim pelo site e gostaria de ver as opções de {categoria} da YADEA Itapetininga.',
    orientacao: 'Olá! Vim pelo site e gostaria de uma orientação para escolher o modelo ideal para o meu trajeto.',
    confirmarOficial: 'Olá! Vim pelo site e quero confirmar se estou falando com o atendimento oficial da YADEA Itapetininga.',
    // Botão do hero da campanha (Black November, até a data do catalogo.js).
    black: 'Olá! Vim pelo site e quero aproveitar a Black November YADEA (Owin / DT3).',
  },
};
