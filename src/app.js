// Inicializa ícones Lucide
lucide.createIcons();

// Dados Mockados de Ações (Simulando uma API/Base de Dados RAG)
const acoes = [
    { ticker: "PETR4", empresa: "Petrobras", setor: "Óleo e Gás", preco: 38.50, tipo: "b3", pl: 4.5, dy: 18.5, roe: 28.4, pvp: 1.2 },
    { ticker: "VALE3", empresa: "Vale S.A.", setor: "Mineração", preco: 62.40, tipo: "b3", pl: 6.8, dy: 11.2, roe: 22.1, pvp: 1.5 },
    { ticker: "ITUB4", empresa: "Itaú Unibanco", setor: "Financeiro", preco: 33.10, tipo: "b3", pl: 8.2, dy: 7.5, roe: 20.8, pvp: 1.7 },
    { ticker: "WEGE3", empresa: "WEG S.A.", setor: "Equipamentos", preco: 45.20, tipo: "b3", pl: 32.5, dy: 1.8, roe: 26.2, pvp: 8.4 },
    { ticker: "NVDA", empresa: "NVIDIA Corp.", setor: "Tecnologia", preco: 128.50, tipo: "nyse", pe: 75.4, dy: 0.05, roic: 48.5, fwd_pe: 35.8 },
    { ticker: "AAPL", empresa: "Apple Inc.", setor: "Tecnologia", preco: 185.30, tipo: "nyse", pe: 28.5, dy: 0.5, roic: 56.4, fwd_pe: 26.1 },
    { ticker: "MSFT", empresa: "Microsoft", setor: "Tecnologia", preco: 412.80, tipo: "nyse", pe: 35.2, dy: 0.8, roic: 28.7, fwd_pe: 31.4 }
];

// Elementos da DOM
const stocksContainer = document.getElementById('stocksContainer');
const filterBtns = document.querySelectorAll('.filter-btn');
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const suggestions = document.querySelectorAll('.suggestion-chip');
const clearChatBtn = document.getElementById('clearChatBtn');

// Função para renderizar os cards de ações
function renderStocks(filterType = 'all') {
    stocksContainer.innerHTML = '';
    
    const filteredStocks = acoes.filter(acao => filterType === 'all' || acao.tipo === filterType);
    
    filteredStocks.forEach(acao => {
        const isBR = acao.tipo === 'b3';
        const moeda = isBR ? 'R$' : 'US$';
        const principalMetric = isBR ? `P/L: ${acao.pl}` : `P/E: ${acao.pe}`;
        const secMetric = isBR ? `DY: ${acao.dy}%` : `ROIC: ${acao.roic}%`;

        const card = document.createElement('div');
        card.className = 'stock-card';
        card.innerHTML = `
            <div class="stock-header">
                <span class="stock-ticker">${acao.ticker}</span>
                <span class="stock-price">${moeda} ${acao.preco.toFixed(2)}</span>
            </div>
            <div class="stock-company">${acao.empresa} - ${acao.setor}</div>
            <div class="stock-metrics">
                <div class="metric">${principalMetric}</div>
                <div class="metric">${secMetric}</div>
            </div>
        `;
        
        // Ao clicar no card, joga o ticker para o input
        card.addEventListener('click', () => {
            userInput.value = `Gostaria de uma análise fundamentalista da ${acao.ticker}`;
            userInput.focus();
        });

        stocksContainer.appendChild(card);
    });
}

// Filtros da sidebar
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderStocks(btn.getAttribute('data-filter'));
    });
});

// Lógica do Chat e "Motor" Simulado de IA
function addMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    msgDiv.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Respostas simuladas baseadas em palavras-chave (Mockando o LLM + RAG)
function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    
    // Guardrail: Recusa análises fora do escopo ou recomendação de giro rápido (Day Trade)
    if (lowerInput.includes('day trade') || lowerInput.includes('vender amanhã') || lowerInput.includes('opções binárias')) {
        return "Meu foco como educador financeiro é na **análise fundamentalista para o longo prazo (Buy and Hold)**. Não realizo previsões de curto prazo ou recomendações de Day Trade. Quer avaliar os indicadores de longo prazo de alguma empresa específica?";
    }

    // Busca específica de ativos na "base"
    const acaoEncontrada = acoes.find(a => lowerInput.includes(a.ticker.toLowerCase()));
    
    if (acaoEncontrada) {
        if (acaoEncontrada.tipo === 'b3') {
            return `Avaliando a **${acaoEncontrada.ticker} (${acaoEncontrada.empresa})**:<br><br>
            • **Cotação Atual:** R$ ${acaoEncontrada.preco.toFixed(2)}<br>
            • **P/L:** ${acaoEncontrada.pl} (Indica quantos anos levaria para reaver o capital apenas com o lucro).<br>
            • **Dividend Yield:** ${acaoEncontrada.dy}% (Retorno em proventos).<br>
            • **ROE:** ${acaoEncontrada.roe}% (Mede a rentabilidade sobre o patrimônio).<br><br>
            Segundo os critérios de Bazin, empresas com DY acima de 6% e bons lucros são candidatas para carteira de dividendos. <em>Lembre-se: esta análise é educacional e não uma recomendação formal de compra.</em>`;
        } else {
            return `Avaliando a **${acaoEncontrada.ticker} (${acaoEncontrada.empresa})**:<br><br>
            • **Cotação Atual:** US$ ${acaoEncontrada.preco.toFixed(2)}<br>
            • **P/E (Preço/Lucro):** ${acaoEncontrada.pe}<br>
            • **Forward P/E:** ${acaoEncontrada.fwd_pe} (Expectativa futura de P/E, se for menor que o atual indica projeção de crescimento nos lucros).<br>
            • **ROIC:** ${acaoEncontrada.roic}% (Excelente métrica de eficiência operacional).<br><br>
            Para empresas de tecnologia/growth como esta, o foco muitas vezes recai na capacidade contínua de manter ROIC e margens elevadas, mais do que focar apenas no Dividend Yield. <em>Esta análise é educacional.</em>`;
        }
    }

    if (lowerInput.includes('dividend') || lowerInput.includes('dy') || lowerInput.includes('renda')) {
        return "Para viver de dividendos, a **metodologia de Décio Bazin** sugere empresas com Dividend Yield (DY) histórico superior a 6% ao ano e baixo endividamento. Na minha base atual (olhe a barra lateral), destaco **PETR4** (18.5% DY) e **VALE3** (11.2% DY). Deseja saber como calcular o Preço Teto delas?";
    }

    if (lowerInput.includes('graham') || lowerInput.includes('barata') || lowerInput.includes('valor')) {
        return "Benjamin Graham, o pai do **Value Investing**, procurava empresas negociadas abaixo do seu valor intrínseco. Ele focava em múltiplos baixos, como P/L (abaixo de 15) e P/VP (abaixo de 1.5). **ITUB4** (P/L 8.2) e **BBAS3** (se estivesse na lista principal, P/L em torno de 4) são exemplos clássicos na B3 atualmente.";
    }
    
    // Alucinação prevenida para ativos não mapeados (Ex: AMER3)
    if (lowerInput.includes('amer3') || lowerInput.includes('roxo34') || lowerInput.includes('mglu3')) {
        return "Desculpe, mas não possuo os dados fundamentalistas dessa empresa na minha base de conhecimento atual (data/acoes_nacionais.json). Por segurança, só analiso os ativos cujos números eu posso verificar em minha base curada. Posso te ajudar com WEGE3, ITUB4, PETR4, entre outras.";
    }

    return "Entendido. Como assistente focado em Value Investing, eu avalio empresas baseando-me em seus balanços (P/L, DY, ROE/ROIC). Me diga o nome de uma ação da lista ou pergunte sobre uma estratégia (ex: Dividendos ou Crescimento).";
}

// Handle de envio do chat
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = userInput.value.trim();
    if (!text) return;

    // Msg do User
    addMessage(text, true);
    userInput.value = '';

    // Simular delay "pensando" da IA
    setTimeout(() => {
        const botResponse = getBotResponse(text);
        addMessage(botResponse, false);
    }, 800);
});

// Suggestions click
suggestions.forEach(chip => {
    chip.addEventListener('click', () => {
        userInput.value = chip.textContent;
        userInput.focus();
    });
});

// Clear Chat
clearChatBtn.addEventListener('click', () => {
    chatMessages.innerHTML = `
        <div class="message bot-message">
            <div class="message-content">
                <p>Chat limpo! O que você gostaria de analisar agora?</p>
            </div>
        </div>
    `;
});

// Inicialização
renderStocks();
