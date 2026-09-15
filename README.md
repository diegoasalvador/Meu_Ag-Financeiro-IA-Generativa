# InvestAI 📈🤖
**Assistente Virtual de Análise Fundamentalista**

![InvestAI Preview](https://via.placeholder.com/1200x600.png?text=InvestAI+-+Terminal+Financeiro)

## 📌 Sobre o Projeto
Este projeto foi desenvolvido como resolução do **Desafio Lab DIO: Construa Seu Assistente Virtual Com Inteligência Artificial**. 

O **InvestAI** é um assistente virtual simulado focado em atuar como um **Educador Financeiro** e **Analista Fundamentalista**. Ele ajuda investidores a avaliar ações brasileiras (B3) e americanas (NYSE/NASDAQ) através de critérios sólidos de *Value Investing* (Graham) e foco em Dividendos (Bazin), mantendo o rigor contra "dicas" e especulações de curto prazo (Day Trade).

### 🎯 Proposta de Valor
A interface simula um "Terminal Financeiro" interativo onde o usuário tem cards de cotações em tempo real à esquerda e um chat integrado à direita, focado em educação financeira, sem alucinações (inventar números) e com *guardrails* bem estruturados.

## 📁 Estrutura do Desafio (Os 6 Passos)
A resolução do desafio está devidamente separada e documentada dentro deste repositório:

1. **Documentação / Persona:** [`docs/persona.md`](./docs/persona.md) - Define o tom de voz, regras restritivas e missão do agente.
2. **Base de Conhecimento (Dados):** [`data/`](./data) - JSONs contendo os dados (múltiplos, indicadores) das ações e critérios de valuation.
3. **Engenharia de Prompts:** [`docs/prompts.md`](./docs/prompts.md) - System Prompt central e exemplos (*few-shot*) do comportamento da IA.
4. **Aplicação Funcional:** [`src/`](./src) - Interface Web rica, interativa, com HTML/CSS e lógica JS (Simulando RAG e Respostas do LLM).
5. **Avaliação e Métricas:** [`docs/avaliacao_metricas.md`](./docs/avaliacao_metricas.md) - Matriz de testes de acurácia, anti-alucinação e compliance (Disclaimer).
6. **Pitch:** [`docs/pitch.md`](./docs/pitch.md) - O elevador pitch do projeto.

## 🚀 Como Executar Localmente
O aplicativo web funcional foi feito utilizando apenas Vanilla HTML/CSS e JavaScript, não sendo necessário NodeJS ou processos de *build* complexos para a camada de demonstração visual.

1. Clone o repositório:
   ```bash
   git clone https://github.com/diegoasalvador/Meu_Ag-Financeiro-IA-Generativa.git
   ```
2. Abra a pasta `src/` no seu explorador de arquivos.
3. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente no navegador. (Para uma melhor experiência, use a extensão *Live Server* do VSCode).

## 🛠️ Tecnologias Utilizadas
- **UI / Frontend:** HTML5, CSS3 (Vanilla), JavaScript.
- **Design System:** Estilo *Glassmorphism*, paleta dark mode premium, variáveis CSS.
- **Ícones e Fontes:** Lucide Icons, Google Fonts (Inter e Outfit).
- **Dados:** Arquivos JSON (simulando um banco vetorizado e metadados RAG).

---
> ⚠️ **Aviso de Compliance (Disclaimer):**
> Este projeto tem fins estritamente **educacionais** e compõe uma avaliação prática de Inteligência Artificial pela DIO. As análises geradas pelo bot nos testes **não constituem recomendação de compra ou venda** de valores mobiliários. Os dados inseridos no JSON podem não refletir o mercado em tempo real.
