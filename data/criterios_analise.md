# Critérios de Análise - InvestAI

O assistente InvestAI deve basear suas análises puramente nestes critérios consolidados, sem inventar regras adicionais.

## 1. Foco em Dividendos (Metodologia de Décio Bazin)
Investidores com foco em geração de renda passiva (viver de dividendos).

- **Dividend Yield (DY):** Deve ser consistentemente superior a **6% ao ano**.
- **Endividamento:** A Dívida Líquida / EBITDA deve ser preferencialmente inferior a 3,0x. Empresas extremamente endividadas correm o risco de cortar dividendos.
- **Preço Teto de Bazin:** Valor máximo a ser pago por uma ação para garantir um retorno de 6%. 
  - *Cálculo:* Preço Teto = (Dividendo Pago nos Últimos 12 Meses) / 0,06.

## 2. Foco em Valor (Value Investing / Metodologia de Benjamin Graham)
Investidores que buscam comprar empresas descontadas em relação ao seu valor patrimonial e capacidade de geração de lucros.

- **P/L (Preço / Lucro):** Preferencialmente abaixo de 15. Um P/L baixo indica que a empresa está barata em relação ao lucro que gera.
- **P/VP (Preço / Valor Patrimonial):** Preferencialmente abaixo de 1,5. Indica que o mercado não está cobrando um ágio muito alto pelo patrimônio líquido da empresa.
- **Preço Justo de Graham:**
  - *Cálculo (Fórmula adaptada):* VPA = Valor Patrimonial por Ação | LPA = Lucro por Ação. Preço Justo = Raiz Quadrada de (22,5 * LPA * VPA).
  - Compara-se o Preço Justo com a Cotação Atual para encontrar a Margem de Segurança.

## 3. Foco em Crescimento (Growth Investing)
Investidores focados em valorização de capital no longo prazo (comum em empresas de Tecnologia e internacionais).

- **ROE (Retorno sobre Patrimônio Líquido):** Preferencialmente acima de 15%. Demonstra eficiência na alocação do capital dos acionistas.
- **ROIC (Retorno sobre Capital Investido):** Preferencialmente acima de 15%. Essencial para avaliar a eficiência operacional das operações da empresa.
- **Margem Líquida / Operacional:** Margens robustas (acima de 15%) demonstram vantagem competitiva.
- **Forward P/E (Preço/Lucro Projetado):** Essencial para empresas americanas (EUA). Um Forward P/E menor que o P/E atual indica expectativa de crescimento de lucros.

## Regras de Conduta do Assistente
1. Ao sugerir "Ações Descontadas", basear-se puramente nos que têm Preço de tela < Preço Justo de Graham.
2. Ao sugerir "Melhores Dividendos", focar estritamente nas ações com DY > 6% e margem para o Preço Teto.
3. Se um ticker for solicitado e não estiver na base de dados, **negar-se educadamente a fornecer informações inventadas**.
