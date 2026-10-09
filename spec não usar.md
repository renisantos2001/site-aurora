# Especificação de Arquitetura e Design System para Landing Pages de Alta Conversão

> **Base do Projeto:** Arquitetura criada e validada na *Clínica Aurora (Clínica Modelo Premium)*.  
> **Finalidade:** Servir como guia definitivo e reutilizável para construir novos sites e landing pages para clínicas médicas, odontológicas, estéticas, consultorias e negócios de alto padrão.

---

## 1. Stack Tecnológica & Princípios Core

| Camada | Tecnologia / Padrão | Justificativa |
| :--- | :--- | :--- |
| **Estrutura** | **HTML5 Semântico Puro** | Acessibilidade nativa, SEO avançado, sem overhead de compilação. |
| **Estilo** | **Vanilla CSS Moderno** | Sem dependência de Tailwind ou frameworks; total controle sobre performance, tokens CSS nativos e flexibilidade de layout. |
| **Comportamento** | **Vanilla JS (ES6+)** | Zero bibliotecas externas. Interações fluidas (IntersectionObserver, menus, expansores de cards). |
| **Ícones** | **SVGs inline otimizados** | Sem fontes de ícones pesadas (FontAwesome); SVGs do WhatsApp e chevrons embutidos com zero requisições HTTP adicionais. |
| **Performance** | **Score 98-100 no Google PageSpeed** | Carregamento instantâneo, imagens com `loading="lazy"`, fontes do Google Fonts pré-conectadas (`preconnect`). |

---

## 2. Estrutura de Arquivos do Projeto

Ao iniciar um novo projeto baseado nesta spec, crie a seguinte estrutura:

```text
meu-novo-projeto/
├── assets/
│   ├── hero-bg.jpg            # Imagem de fundo do topo (ótima nitidez, tratada)
│   ├── about-clinica.jpg      # Foto do espaço ou fundador
│   ├── estrutura-clinica.jpg  # Foto de consultório ou ambiente
│   ├── doc-1.jpg a doc-8.jpg  # Fotos quadradas ou 4:5 da equipe
│   ├── logo-sulamerica.png    # Logos de parceiros/convênios (PNG transparente)
│   ├── logo-bradesco.png
│   └── logo-amil.png
├── index.html                 # Página única com todas as seções semânticas
├── styles.css                 # Design system com tokens, reset e media queries
├── script.js                  # Lógica do header, menu, acordeons e animações
├── robots.txt                 # Instruções de indexação para motores de busca
├── sitemap.xml                # Mapa de URL do site
├── llms.txt                   # Documentação contextual para inteligências artificiais
└── SITE_SPEC.md               # Esta especificação técnica
```

---

## 3. Design System & Tokens Visuais (`:root`)

Os valores abaixo definem a sofisticação da página. Para novos clientes, **basta alterar as variáveis de cor principal**:

```css
:root {
  /* Cores de Texto e Contraste */
  --ink: #17302e;                /* Texto principal / Títulos escuros (verde quase preto) */
  --ink-2: #314844;              /* Texto secundário e parágrafos */
  --muted: #647773;              /* Textos de apoio, legendas e rótulos */
  --white: #ffffff;              /* Branco puro */

  /* Cores de Marca (Paleta Primária) */
  --primary: #2f6a61;            /* Tom principal elegante (verde floresta suave / petróleo) */
  --primary-deep: #173d38;       /* Tom escuro para números e ênfases */
  --primary-soft: #edf4f2;       /* Fundo suave para alternância de seções */
  --primary-soft-2: #e3ece9;     /* Variação de bordas e cartões sutis */

  /* Cores Neutras de Apoio */
  --warm: #f8f5f0;               /* Bege sutil premium */
  --line: #dfe7e4;               /* Linhas divisórias e bordas de cards */
  --line-light: rgba(223, 231, 228, 0.5);

  /* Seções Escuras / Noturnas */
  --dark: #0f2825;               /* Fundo escuro de alto contraste */
  --dark-surface: #143531;       /* Cartões e nós da seção escura */
  --gold: #b59a68;               /* Dourado refinado para detalhes e números do stepper */
  --gold-soft: rgba(181, 154, 104, 0.15);

  /* Cor de Conversão Oficial */
  --wa: #1f9d55;                 /* Verde WhatsApp oficial */
  --wa-hover: #198748;           /* Hover do botão */

  /* Raios de Borda (Curvatura Premium) */
  --radius-sm: 12px;             /* Cards pequenos e botões secundários */
  --radius: 18px;                /* Cards principais e caixas de informação */
  --radius-lg: 24px;             /* Painéis de imagem e banners destacados */

  /* Sombras em Camadas (Delicadas e não invasivas) */
  --shadow-sm: 0 4px 18px rgba(16, 42, 39, .06);
  --shadow: 0 16px 40px rgba(16, 42, 39, .08);
  --shadow-lg: 0 24px 60px rgba(16, 42, 39, .14);
}
```

---

## 4. Tipografia & Hierarquia

A composição usa uma fonte **serifada aristocrática** para títulos e uma **geométrica limpa** para leitura:

1. **Títulos e Números:** `"Playfair Display", Georgia, serif` (peso 600 ou 700).
2. **Corpo, Botões e Navegação:** `"DM Sans", system-ui, -apple-system, sans-serif` (pesos 400, 500 e 700).

### Escala de Tamanhos Recomendada:
- **H1 (Hero):** Desktop: `44px` a `48px` | Mobile: `32px` a `34px` (evitar quebras excessivas de linha).
- **H2 (Títulos de Seção):** Desktop: `34px` a `38px` | Mobile: `24px` a `26px`.
- **H3 (Cards e Subtítulos):** Desktop: `17px` a `19px` | Mobile: `16px` a `17px`.
- **Eyebrow (Chapeuzinho acima do título):** `11px` a `12px`, caixa alta (`uppercase`), `letter-spacing: 0.12em`, negrito 700.
- **Corpo do Texto:** `15px` a `16px`, `line-height: 1.55` a `1.6`.

---

## 5. Regra de Intercalação de Cores e Ritmo Visual

O segredo da estética premium é o **ritmo alternado de contraste** entre as seções, evitando a monotonia do fundo branco contínuo:

| # | Seção | ID | Classe de Fundo | Cor / Efeito | Propósito Visual |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **0** | **Header Fixo** | — | `.site-header` | Transparente sobre o Hero; passa para branco translúcido com `backdrop-filter: blur(14px)` ao rolar. | Transição suave sem poluir o início. |
| **1** | **Hero** | `#topo` | `.hero` | Escuro profundo (`--dark`) com overlay gradiente sobre imagem fina vertical. | Impacto visual e autoridade imediata. |
| **2** | **Intro & Métricas** | `#sobre` (topo) | `.section-white` | **Branco Puro** (`#fff`) | Respiro visual claro com métricas em 3 colunas. |
| **3** | **Especialidades** | `#especialidades` | `.section-soft` | **Verde Suave** (`--primary-soft`) | Agrupamento dos cartões de serviços. |
| **4** | **Sobre a Clínica** | `#sobre` | `.section-white` | **Branco Puro** (`#fff`) | Foto do ambiente + diferenciais em tópicos. |
| **5** | **Equipe Médica** | `#equipe` | `.section-soft` | **Verde Suave** (`--primary-soft`) | Cartões de médicos/especialistas. |
| **6** | **Nossa Estrutura** | `#estrutura` | `.section-white` | **Branco Puro** (`#fff`) | Galeria orgânica e atmosfera da clínica. |
| **7** | **Como Funciona** | `#como-funciona` | `.section-dark` | **Escuro Profundo** (`--dark`) com detalhes dourados (`--gold`) | Quebra de ritmo deliberada para destacar a simplicidade do passo a passo. |
| **8** | **Convênios / Parceiros** | `#convenios` | `.section-soft` | **Verde Suave** (`--primary-soft`) | Logos das marcas aceitas com destaque neutro. |
| **9** | **Dúvidas (FAQ)** | `#faq` | `.section-white` | **Branco Puro** (`#fff`) | Acordeons limpos com linha de separação. |
| **10** | **Contato / Fechamento** | `#contato` | `.section-contact` | **Verde Floresta Escuro** (`#173d38`) com cartão branco flutuante | Chamada final forte para agendamento. |
| **11** | **Footer** | — | `.footer` | **Escuro Intenso** (`#0a1d1b`) | Finalização sóbria com mapa de links e CRM. |

---

## 6. Padrões Especiais de Componentes

### 6.1. Cards Retangulares Compactos de Serviços (com expansão)
- **Tamanho:** Cards em proporção retangular horizontal (ex.: `padding: 20px`, `min-height: 142px`), não quadrados gigantes.
- **Grid Inicial:** 8 cards visíveis (4 colunas no desktop, 2 no tablet, 1 no mobile).
- **Expansão Dinâmica:** Cards adicionais com classe `.specialty-extra` e botão com texto dinâmico: *"Ver todas as especialidades"* $\leftrightarrow$ *"Ver menos especialidades"*.

### 6.2. Cartões de Profissionais com Micro-Biografia
- 4 colunas no desktop.
- Foto com `aspect-ratio: 1 / 1` ou `4 / 4.5`, bordas arredondadas e filtro sutil.
- CRM/RQE destacado em etiqueta discreta.
- Botão "Agendar horário" estilizado em pílula (`border-radius: 999px`) direcionado com mensagem pré-preenchida no WhatsApp para o médico correspondente.

### 6.3. Container de Logos para Qualquer Formato (Convênios/Parceiros)
Para evitar que marcas horizontais, quadradas ou verticais fiquem desproporcionais ou cortadas:
```css
.convenio-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 165px;
}

.convenio-logo-stage {
  width: 100%;
  max-width: 240px;
  height: 74px; /* Altura fixa de palco */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
}

.convenio-logo-img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain; /* Nunca distorce nem corta */
  object-position: center;
}
```

### 6.4. Seção "Como Funciona" (Stepper)
- **Desktop:** Linha tracejada horizontal interligando os nós numerados (`01`, `02`, `03`, `04`).
- **Nós circulares:** 60x60px, fundo escuro com borda dourada (`--gold`) e efeito de escala no hover.

---

## 7. Diretrizes Cruciais de Responsividade Mobile

Ao adaptar para telas pequenas (`max-width: 860px` e `max-width: 640px`):

### 1. Centralização Obrigatória dos Botões de Conversão
No mobile, nenhum botão principal ou secundário de agendamento deve ficar encostado à esquerda:
```css
.hero-actions, .about-action, .structure-action, .contact-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.hero-actions .btn, .about-action .btn, .structure-action .btn, .contact-action .btn {
  width: 100%;
  max-width: 320px;
  margin-inline: auto;
  text-align: center;
  justify-content: center;
}
```

### 2. Métricas/Números Centralizados na Horizontal
As quantidades **não devem empilhar na vertical**, para não ocupar altura excessiva de rolagem. Devem ficar lado a lado em 3 colunas, com números e legendas centralizados:
```css
@media (max-width: 640px) {
  .stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px 12px;
    text-align: center;
  }
  .stats article {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .stats strong {
    font-size: 24px;
    line-height: 1.1;
  }
  .stats span {
    font-size: 11px;
    line-height: 1.25;
  }
}
```

### 3. Profissionais em Carrossel com Snap Nativo
No mobile, o grid de 4 médicos por linha transforma-se em um carrossel de rolagem horizontal com parada magnética (`scroll-snap`), sem necessidade de bibliotecas como Swiper:
```css
@media (max-width: 768px) {
  .team-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 16px;
    padding: 10px 14px 18px;
    margin-inline: -14px; /* Permite sangrar até a borda da tela */
  }
  .team-card {
    flex: 0 0 265px;
    max-width: 265px;
    scroll-snap-align: center;
  }
  .team-carousel-hint {
    display: flex; /* Dica visual "Deslize para ver mais" */
  }
}
```

### 4. Como Funciona no Mobile
- Remove a linha tracejada horizontal (`.process-stepper::before { display: none; }`).
- Alinha cada etapa em coluna única com o nó circular centralizado acima do título e texto centralizado.

---

## 8. Padrão de Copywriting & Tom de Voz

- **Foco em facilidade e agilidade:** Em vez de termos burocráticos como "Fale com a recepção", utilize:
  - *"Agendar um horário"*
  - *"Agendar consulta"*
  - *"Consultar cobertura do convênio"*
- **Sem Emojis nos textos ou títulos:** O design de alto padrão médico/executivo evita emojis decorativos e confia em tipografia nítida, bullets estilizados e chevrons em SVG (`→`).
- **Links de WhatsApp com mensagem personalizada:** Todos os botões abrem uma conversa com o texto pronto referente ao contexto (ex.: `Olá! Gostaria de agendar um horário em Cardiologia`).

---

## 9. Checklist para Replicar em um Novo Projeto

1. [ ] Clonar a estrutura básica de arquivos (`index.html`, `styles.css`, `script.js`).
2. [ ] Definir a paleta em `:root` (ajustar `--primary`, `--primary-soft` e `--dark` conforme o branding do novo cliente).
3. [ ] Substituir o logo e as imagens na pasta `assets/`.
4. [ ] Atualizar os links de WhatsApp (`wa.me/55...`) com o número oficial do cliente e mensagem de entrada.
5. [ ] Preencher as 8 especialidades iniciais e extras no HTML.
6. [ ] Cadastrar os profissionais da clínica com foto, especialidade e CRM.
7. [ ] Inserir os logos de convênios aceitos nos cards adaptáveis de 3 colunas.
8. [ ] Atualizar endereço, horários de atendimento e CRM do responsável técnico no rodapé.
9. [ ] Conferir os dados de SEO nos arquivos `robots.txt`, `sitemap.xml` e `llms.txt`.
