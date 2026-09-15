# Memory - InvestAI: Assistente Virtual de Análise de Ações (Nacionais e Internacionais)

> **Projeto:** Assistente Virtual com Inteligência Artificial para Análise de Ações  
> **Contexto:** Desafio Lab DIO ("Construa Seu Assistente Virtual Com Inteligência Artificial")  
> **Tema Escolhido:** Análise e triagem de oportunidades de compra de ações brasileiras (B3) e internacionais (NYSE / NASDAQ).  
> **Localização:** `/home/diegosalvador/Projetos/interface/agente financeiro/`  
> **Data:** 15/09/2026

---

## 1. Visão Geral do Projeto & Proposta de Valor

O **InvestAI** é um assistente virtual com IA desenhado para atuar como um analista fundamentalista e educador financeiro inteligente. Ele orienta investidores a identificar papéis que estejam em momentos favoráveis para compra, tanto no mercado nacional (B3) quanto internacional (NYSE/NASDAQ), combinando critérios consagrados de valuation e saúde financeira com uma interface amigável e moderna.

### Princípios Inegociáveis (Diretrizes do Desafio):
- **Baseado em Conhecimento:** Respostas fundamentadas em dados estruturados e critérios de análise bem documentados.
- **Prevenção de Alucinação:** Nunca inventar cotações, múltiplos ou balanços. Se um dado ou ativo não estiver disponível, o agente declara objetivamente sua ausência.
- **Apoio à Decisão com Compliance:** Explicar o racional por trás de cada análise (ex: Graham, Bazin, Múltiplos P/L, DY, ROE), mantendo o disclaimer de que o conteúdo tem caráter educativo e analítico (não sendo recomendação oficial registrada de compra/venda).

---

## 2. Estrutura dos 6 Passos Obrigatórios

```text
agente financeiro/
├── README.md                      # Apresentação completa do projeto e instruções de uso
├── ivest_ia.md                    # Registro de memória e arquitetura do projeto
├── desafioagente.txt              # Requisitos originais do desafio DIO
├── data/                          # Base de conhecimento curada
│   ├── acoes_nacionais.json       # Dados de empresas B3 (PETR4, VALE3, ITUB4, WEGE3, etc.)
│   ├── acoes_internacionais.json  # Dados de empresas NYSE/NASDAQ (NVDA, AAPL, MSFT, KO, etc.)
│   └── criterios_analise.md       # Regras de Graham, Bazin, Dividend Yield, P/L, ROE e Endividamento
├── docs/                          # Documentação teórica e validação
│   ├── persona.md                 # Tom de voz, público-alvo, diretrizes éticas e restrições
│   ├── prompts.md                 # Engenharia de prompts (System Prompt, Few-Shot, Guardrails)
│   ├── avaliacao_metricas.md      # Bateria de testes, acurácia, tratamento de alucinações
│   └── pitch.md                   # Problema, solução, diferenciais e valor de mercado
└── src/                           # Aplicação funcional interativa
    ├── index.html                 # Interface Web rica (Dark Mode / Estilo Terminal Financeiro)
    ├── style.css                  # Design System elegante, responsivo e com micro-interações
    └── app.js                     # Motor do chat, motor de busca/RAG local e integração com IA
```

---

## 3. Detalhamento dos Componentes

### Passo 1: Documentação do Agente (`docs/persona.md`)
- **Nome do Assistente:** InvestAI.
- **Tom de Voz:** Analítico, objetivo, didático e profissional (estilo analista sênior de equity research).
- **Público:** Investidores iniciantes e intermediários que buscam clareza entre excesso de notícias e jargões.
- **Guardrails:** Recusa opiniões especulativas/day-trade de curto prazo; prioriza buy and hold e valuation consistente.

### Passo 2: Base de Conhecimento (`data/`)
- **Ações Nacionais (B3):**
  - Tickers representativos de diferentes setores (Commodities, Bancos, Elétricas, Tecnologia, Varejo).
  - Indicadores: Cotação de referência, P/L, P/VP, Dividend Yield (DY 12m), ROE, Margem Líquida, Dívida Líquida/EBITDA, Preço Teto Bazin e Preço Justo de Graham.
- **Ações Internacionais (EUA):**
  - Big Techs, Dividend Aristocrats e líderes globais.
  - Indicadores: P/E, P/B, Dividend Yield, ROIC, Margem Operacional, Forward P/E.
- **Critérios de Triagem:**
  - *Foco Dividendos:* DY > 6%, Payout sustentável, Dívida controlada.
  - *Foco Valor (Value Investing):* P/L abaixo da média histórica, P/VP atrativo, margens consistentes.
  - *Foco Crescimento (Growth):* ROE/ROIC elevado, crescimento composto de receita e lucro.

### Passo 3: Engenharia de Prompts (`docs/prompts.md`)
- Instrução de Sistema detalhada com delimitação de escopo (RAG-prompting).
- Exemplos de poucas etapas (*Few-Shot*) para estruturar a resposta:
  1. Identificação do ativo ou perfil do investidor;
  2. Apresentação dos indicadores reais da base;
  3. Diagnóstico segundo os critérios (Pontos fortes x Riscos);
  4. Conclusão pedagógica e próximos passos sugeridos.

### Passo 4: Aplicação Funcional (`src/`)
- Interface Web moderna (Dashboard Financeiro Dark Mode):
  - Cards de cotação e destaques das ações (Nacionais e Internacionais).
  - Filtros rápidos por perfil: "Melhores Dividendos", "Ações Descontadas (Graham)", "Gigantes Globais".
  - Chat interativo com o assistente, permitindo perguntas livres como:
    - *"Quais ações nacionais estão com bom dividend yield e preço atrativo?"*
    - *"Vale a pena comprar NVDA ou MSFT pelos múltiplos atuais?"*
    - *"Como calcular o preço teto da PETR4 ou ITUB4?"*

### Passo 5: Avaliação e Métricas (`docs/avaliacao_metricas.md`)
- Matriz de testes com perguntas estruturadas:
  - Perguntas com resposta na base (taxa de acerto factual).
  - Perguntas sobre ativos inexistentes na base (comportamento seguro e sem alucinação).
  - Tentativas de forçar recomendação de compra direta ou day trade (ativação dos guardrails).

### Passo 6: Pitch Final (`docs/pitch.md`)
- Estruturação em 3 minutos:
  - **O Problema:** A dispersão de dados e a ansiedade do investidor comum diante de milhares de relatórios complexos.
  - **A Solução:** Um assistente inteligente que mastiga indicadores e aplica metodologias validadas em segundos.
  - **O Diferencial:** Conexão direta com bases confiáveis, transparência nos critérios e total compliance educativo.

---

## 4. Status de Execução
- [x] Análise dos requisitos do Lab DIO (`desafioagente.txt`).
- [x] Definição do escopo: Ações Nacionais (B3) e Internacionais (EUA).
- [x] Criação do documento de memória e arquitetura (`ivest_ia.md`).
- [ ] Criação dos arquivos da base de conhecimento (`data/`).
- [ ] Elaboração da documentação técnica e de prompts (`docs/`).
- [ ] Desenvolvimento da aplicação web funcional interativa (`src/`).
- [ ] Testes, métricas de avaliação e elaboração do pitch.
