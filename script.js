// ===== DADOS =====
const CLIENTES = [
    { nome: "Viralizar Marca",       desc: "A empresa quer explodir nas redes e ganhar visibilidade rapidamente.", cri: 4, est: 2, com: 3 },
    { nome: "Recuperar Vendas",      desc: "Aumentar vendas após queda expressiva no último trimestre.",           cri: 2, est: 4, com: 2 },
    { nome: "Melhorar Reputação",    desc: "Imagem ruim está afastando clientes. Precisa de recuperação urgente.", cri: 2, est: 3, com: 4 },
    { nome: "Lançar Produto",        desc: "Novo produto no mercado precisa de uma campanha de impacto.",          cri: 3, est: 3, com: 3 },
    { nome: "Atrair Público Jovem",  desc: "Conquista de nova audiência entre 18 e 25 anos.",                     cri: 4, est: 2, com: 3 },
    { nome: "Aumentar Engajamento",  desc: "Mais interação e comentários nas redes sociais.",                     cri: 3, est: 2, com: 4 },
    { nome: "Crescer no TikTok",     desc: "Alcance rápido e viral na plataforma do momento.",                    cri: 4, est: 1, com: 3 },
    { nome: "Fortalecer Marca",      desc: "Branding consistente para consolidar presença no mercado.",           cri: 2, est: 4, com: 3 },
    { nome: "Divulgar Evento",       desc: "Evento grande que precisa lotar e gerar buzz.",                       cri: 3, est: 3, com: 3 },
    { nome: "Gerar Leads",           desc: "Captar novos clientes potenciais para o funil de vendas.",            cri: 2, est: 4, com: 2 }
  ];
   
  const EVENTOS = [
    { nome: "Crise nas Redes",        desc: "Comentários negativos estão viralizando.",        cri: 1, est: 2, com: 4 },
    { nome: "Pouco Orçamento",        desc: "Baixo investimento disponível para a campanha.",  cri: 2, est: 3, com: 1 },
    { nome: "Concorrente Viralizou",  desc: "Competidor forte roubou a cena.",                 cri: 3, est: 3, com: 2 },
    { nome: "Influencer Cancelado",   desc: "Parceria deu ruim na hora H.",                    cri: 1, est: 2, com: 4 },
    { nome: "Equipe Reduzida",        desc: "Poucas pessoas para executar a estratégia.",      cri: 2, est: 2, com: 2 },
    { nome: "Queda de Alcance",       desc: "Algoritmo derrubou o alcance orgânico.",          cri: 2, est: 3, com: 2 },
    { nome: "Público Confuso",        desc: "Mensagem ruim está espantando o público.",        cri: 2, est: 2, com: 4 },
    { nome: "Tendência Mudou",        desc: "Uma nova trend chegou e o mercado mudou.",        cri: 4, est: 2, com: 2 },
    { nome: "Críticas Públicas",      desc: "Reclamações abertas nas redes sociais.",          cri: 1, est: 3, com: 4 },
    { nome: "Baixa Conversão",        desc: "Poucas vendas mesmo com tráfego alto.",           cri: 2, est: 4, com: 2 }
  ];
   
  const ESTRATEGIAS = [
    { nome: "Influencer",           desc: "Parceria com criadores de conteúdo", cri: 3, est: 1, com: 2, img: "imagens/influencer.png"          },
    { nome: "SEO",                  desc: "Busca orgânica otimizada",           cri: 0, est: 4, com: 1, img: "imagens/seo.png"                  },
    { nome: "Rebranding",           desc: "Reposicionamento de marca",          cri: 2, est: 3, com: 2, img: "imagens/rebranding.png"           },
    { nome: "Tráfego Pago",         desc: "Anúncios pagos de alta conversão",   cri: 1, est: 4, com: 1, img: "imagens/trafego_pago.png"         },
    { nome: "Storytelling",         desc: "Narrativa emocional e envolvente",   cri: 4, est: 1, com: 3, img: "imagens/storytelling.png"         },
    { nome: "Promoção",             desc: "Descontos e ofertas especiais",       cri: 2, est: 2, com: 1, img: "imagens/promocao.png"             },
    { nome: "Parceria",             desc: "Colaboração com outras marcas",       cri: 2, est: 3, com: 2, img: "imagens/parceria.png"             },
    { nome: "Vídeos Curtos",        desc: "Conteúdo rápido e viral",            cri: 4, est: 1, com: 2, img: "imagens/videos_curtos.png"        },
    { nome: "Gestão de Crise",      desc: "Resolver problemas rapidamente",     cri: 1, est: 3, com: 4, img: "imagens/gestao_de_crise.png"      },
    { nome: "Branding",             desc: "Construção de identidade forte",     cri: 2, est: 4, com: 3, img: "imagens/branding.png"             },
    { nome: "E-mail Marketing",     desc: "Contato direto com a base",          cri: 1, est: 3, com: 3, img: "imagens/email_marketing.png"      },
    { nome: "Pesquisa de Público",  desc: "Dados e insights de audiência",      cri: 1, est: 4, com: 2, img: "imagens/pesquisa_de_publico.png"  },
    { nome: "Marketing Emocional",  desc: "Conexão profunda com o público",     cri: 4, est: 1, com: 3, img: "imagens/marketing_emocional.png"  },
    { nome: "Trend",                desc: "Aproveitar o hype do momento",       cri: 4, est: 2, com: 2, img: "imagens/trend.png"                },
    { nome: "Evento Presencial",    desc: "Experiência ao vivo marcante",       cri: 3, est: 2, com: 3, img: "imagens/evento_presencial.png"    },
    { nome: "Conteúdo Educativo",   desc: "Informar e agregar valor",           cri: 2, est: 3, com: 3, img: "imagens/conteudo_educativo.png"   },
  ];
   
  // ===== ESTADO =====
  let state = {
    score: 0,
    timeLeft: 90,
    timerInterval: null,
    running: false,
    currentClient: null,
    currentEvent: null,
    currentCards: [],
    selectedCards: [],
    eventShown: false
  };
   
  // ===== UTILITÁRIOS =====
  function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
   
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
   
  function formatTime(s) {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }
   
  // ===== LÓGICA DE SORTEAMENTO GARANTIDO =====
   
  // Verifica se algum par (i,j) do array de cartas supera o alvo nos 3 atributos.
  function pairBeats(cards, tCri, tEst, tCom) {
    for (let i = 0; i < cards.length - 1; i++) {
      for (let j = i + 1; j < cards.length; j++) {
        if (
          cards[i].cri + cards[j].cri >= tCri &&
          cards[i].est + cards[j].est >= tEst &&
          cards[i].com + cards[j].com >= tCom
        ) return true;
      }
    }
    return false;
  }
   
  // Encontra o primeiro par do pool que supera o alvo, ou null se não existe.
  function findBestPair(pool, tCri, tEst, tCom) {
    for (let i = 0; i < pool.length - 1; i++) {
      for (let j = i + 1; j < pool.length; j++) {
        const a = pool[i], b = pool[j];
        if (
          a.cri + b.cri >= tCri &&
          a.est + b.est >= tEst &&
          a.com + b.com >= tCom
        ) return [a, b];
      }
    }
    return null;
  }
   
  // Injeta as cartas de um par garantidor na mão, substituindo as de menor soma total
  // que ainda não pertencem ao par.
  function injectPair(hand, pair) {
    const result = [...hand];
    for (const card of pair) {
      if (result.some(c => c.nome === card.nome)) continue; // já está na mão
      result.sort((a, b) => (a.cri + a.est + a.com) - (b.cri + b.est + b.com));
      result[0] = card;
    }
    return result;
  }
   
  // Sorteia 4 cartas garantindo:
  //   - Prioridade 1: existe ao menos 1 par que resolve CLIENTE + EVENTO (3 pts)
  //   - Prioridade 2: se o alvo combinado for matematicamente impossível no pool,
  //     garante ao menos 1 par que resolve o CLIENTE sozinho (2 pts).
  //     (Isso é sempre possível — verificado em todos os dados do jogo.)
  function drawGuaranteedCards(client, event) {
    const tBothCri = client.cri + event.cri;
    const tBothEst = client.est + event.est;
    const tBothCom = client.com + event.com;
   
    // Tenta 20 sorteios puramente aleatórios (funciona na maioria dos casos)
    for (let attempt = 0; attempt < 20; attempt++) {
      const hand = shuffle(ESTRATEGIAS).slice(0, 4);
      if (pairBeats(hand, tBothCri, tBothEst, tBothCom)) return hand;
    }
   
    // Existe um par no pool que resolve ambos?
    const pairBoth = findBestPair(ESTRATEGIAS, tBothCri, tBothEst, tBothCom);
    if (pairBoth) {
      // Injeta esse par garantidor na mão aleatória
      const hand = shuffle(ESTRATEGIAS).slice(0, 4);
      return injectPair(hand, pairBoth);
    }
   
    // Alvo combinado é matematicamente impossível no pool →
    // garante ao menos par que resolve só o cliente (2 pts).
    for (let attempt = 0; attempt < 20; attempt++) {
      const hand = shuffle(ESTRATEGIAS).slice(0, 4);
      if (pairBeats(hand, client.cri, client.est, client.com)) return hand;
    }
    const pairClient = findBestPair(ESTRATEGIAS, client.cri, client.est, client.com);
    const hand = shuffle(ESTRATEGIAS).slice(0, 4);
    return injectPair(hand, pairClient);
  }
   
  // ===== NAVEGAÇÃO =====
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }
   
  // ===== INICIAR JOGO =====
  function startGame() {
    state.score = 0;
    state.timeLeft = 90;
    state.running = true;
    state.selectedCards = [];
   
    updateScoreDisplay();
    updateSelectedAttrs();
   
    showScreen('screen-game');
    startTimer();
    nextRound();
  }
   
  // ===== TIMER =====
  function startTimer() {
    clearInterval(state.timerInterval);
    const display = document.getElementById('timer-display');
    const panel   = document.getElementById('timer-panel');
   
    display.textContent = formatTime(state.timeLeft);
   
    state.timerInterval = setInterval(() => {
      if (!state.running) return;
      state.timeLeft--;
      display.textContent = formatTime(state.timeLeft);
   
      if (state.timeLeft <= 30) {
        panel.classList.add('urgent');
      } else {
        panel.classList.remove('urgent');
      }
   
      if (state.timeLeft <= 0) {
        clearInterval(state.timerInterval);
        state.running = false;
        endGame();
      }
    }, 1000);
  }
   
  // ===== RODADA =====
  function nextRound() {
    if (!state.running) return;
   
    state.selectedCards = [];
    document.getElementById('confirm-area').classList.add('hidden');
   
    state.currentClient = rand(CLIENTES);
    state.currentEvent  = rand(EVENTOS);
   
    renderClient();
    renderEventPanel();
   
    // Sorteia 4 cartas com garantia de ao menos 1 par vencedor
    state.currentCards = drawGuaranteedCards(state.currentClient, state.currentEvent);
   
    renderCards();
    updateSelectedAttrs();
   
    renderEventOverlay();
    document.getElementById('event-overlay').classList.remove('hidden');
    state.eventShown = true;
  }
   
  function renderClient() {
    const c = state.currentClient;
    document.getElementById('client-name').textContent = c.nome;
    document.getElementById('client-desc').textContent = c.desc;
    document.getElementById('client-cri').textContent  = c.cri;
    document.getElementById('client-est').textContent  = c.est;
    document.getElementById('client-com').textContent  = c.com;
  }
   
  function renderEventOverlay() {
    const e = state.currentEvent;
    document.getElementById('event-name').textContent = e.nome.toUpperCase();
    document.getElementById('event-desc').textContent = e.desc;
    document.getElementById('event-cri').textContent  = e.cri;
    document.getElementById('event-est').textContent  = e.est;
    document.getElementById('event-com').textContent  = e.com;
  }
   
  function renderEventPanel() {
    const e = state.currentEvent;
    document.getElementById('event-panel-name').textContent = e.nome;
    document.getElementById('event-panel-desc').textContent = e.desc;
    document.getElementById('event-panel-cri').textContent  = e.cri;
    document.getElementById('event-panel-est').textContent  = e.est;
    document.getElementById('event-panel-com').textContent  = e.com;
  }
   
  function renderCards() {
    const grid = document.getElementById('cards-grid');
    grid.innerHTML = '';
   
    state.currentCards.forEach((card, i) => {
      const el = document.createElement('div');
      el.className = 'card';
      el.dataset.index = i;
      el.innerHTML = `<img class="card-image" src="${card.img}" alt="${card.nome}">`;
      el.addEventListener('click', () => onCardClick(i));
      grid.appendChild(el);
    });
  }
   
  // ===== SELEÇÃO DE CARTAS =====
  function onCardClick(index) {
    if (!state.running) return;
    if (state.eventShown) return;
   
    const cards = document.querySelectorAll('.card');
    const alreadySelected = state.selectedCards.indexOf(index);
   
    if (alreadySelected !== -1) {
      // Deseleciona
      state.selectedCards.splice(alreadySelected, 1);
      cards[index].classList.remove('selected');
    } else {
      // Seleciona (máximo 2)
      if (state.selectedCards.length >= 2) return;
      state.selectedCards.push(index);
      cards[index].classList.add('selected');
    }
   
    // Escurece cartas não selecionadas quando já há 2 escolhidas
    cards.forEach((c, i) => {
      if (state.selectedCards.length === 2 && !state.selectedCards.includes(i)) {
        c.classList.add('dimmed');
      } else {
        c.classList.remove('dimmed');
      }
    });
   
    if (state.selectedCards.length === 2) {
      document.getElementById('confirm-area').classList.remove('hidden');
    } else {
      document.getElementById('confirm-area').classList.add('hidden');
    }
   
    updateSelectedAttrs();
  }
   
  function cancelSelection() {
    state.selectedCards = [];
    document.querySelectorAll('.card').forEach(c => {
      c.classList.remove('selected', 'dimmed');
    });
    document.getElementById('confirm-area').classList.add('hidden');
    updateSelectedAttrs();
  }
   
  function updateSelectedAttrs() {
    let cri = 0, est = 0, com = 0;
    state.selectedCards.forEach(i => {
      const c = state.currentCards[i];
      if (c) { cri += c.cri; est += c.est; com += c.com; }
    });
    document.getElementById('sel-cri').textContent = cri;
    document.getElementById('sel-est').textContent = est;
    document.getElementById('sel-com').textContent = com;
  }
   
  // ===== CONFIRMAR SELEÇÃO =====
  function confirmSelection() {
    if (state.selectedCards.length !== 2) return;
   
    const s1 = state.currentCards[state.selectedCards[0]];
    const s2 = state.currentCards[state.selectedCards[1]];
   
    const total = {
      cri: s1.cri + s2.cri,
      est: s1.est + s2.est,
      com: s1.com + s2.com
    };
   
    const c = state.currentClient;
    const e = state.currentEvent;
   
    // Função auxiliar: total supera o alvo nos 3 atributos?
    const beats = (tot, tgt) =>
      tot.cri >= tgt.cri && tot.est >= tgt.est && tot.com >= tgt.com;
   
    let points, icon, text, sub;
   
    if (beats(total, { cri: c.cri + e.cri, est: c.est + e.est, com: c.com + e.com })) {
      // Resolveu CLIENTE e EVENTO → 3 pontos
      points = 3; icon = '🏆'; text = '+3 Pontos!'; sub = 'Perfeito! Cliente e Evento resolvidos!';
    } else if (beats(total, { cri: c.cri, est: c.est, com: c.com })) {
      // Resolveu apenas o CLIENTE → 2 pontos
      points = 2; icon = '✅'; text = '+2 Pontos!'; sub = 'Cliente atendido!';
    } else if (beats(total, { cri: e.cri, est: e.est, com: e.com })) {
      // Resolveu apenas o EVENTO → 1 ponto
      points = 1; icon = '⚡'; text = '+1 Ponto!'; sub = 'Evento resolvido!';
    } else {
      // Não resolveu nenhum → -2 pontos
      points = -2; icon = '💀'; text = '-2 Pontos!'; sub = 'Falhou em tudo!';
    }
   
    state.score += points;
    if (state.score < 0) state.score = 0; // pontuação mínima é 0
    updateScoreDisplay();
    showFeedback(icon, text, sub);
   
    setTimeout(() => {
      hideFeedback();
      nextRound();
    }, 1800);
  }
   
  // ===== FEEDBACK =====
  function showFeedback(icon, text, sub) {
    document.getElementById('feedback-icon').textContent = icon;
    document.getElementById('feedback-text').textContent = text;
    document.getElementById('feedback-sub').textContent  = sub;
    document.getElementById('feedback-overlay').classList.remove('hidden');
  }
   
  function hideFeedback() {
    document.getElementById('feedback-overlay').classList.add('hidden');
  }
   
  // ===== SCORE =====
  function updateScoreDisplay() {
    document.getElementById('score').textContent = state.score;
  }
   
  // ===== FIM DO JOGO =====
  function endGame() {
    hideFeedback();
    document.getElementById('event-overlay').classList.add('hidden');
   
    const score = state.score;
    let rank, trophy;
   
    if      (score >= 7) { rank = 'Lenda 🌟';        trophy = '🏆'; }
    else if (score >= 4) { rank = 'Estrategista 💡';  trophy = '🥇'; }
    else if (score >= 1) { rank = 'Analista 📊';      trophy = '🥈'; }
    else                 { rank = 'Cancelado 💀';      trophy = '💔'; }
   
    document.getElementById('end-trophy').textContent        = trophy;
    document.getElementById('end-rank').textContent          = rank;
    document.getElementById('end-score-display').textContent = `${score} ${score === 1 ? 'ponto' : 'pontos'}`;
    document.getElementById('input-empresa').value           = '';
   
    showScreen('screen-end');
  }
   
  // ===== FINALIZAR (volta ao início) =====
  function finalize() {
    clearInterval(state.timerInterval);
    state = {
      score: 0,
      timeLeft: 90,
      timerInterval: null,
      running: false,
      currentClient: null,
      currentEvent: null,
      currentCards: [],
      selectedCards: [],
      eventShown: false
    };
   
    document.getElementById('timer-display').textContent = '01:30';
    document.getElementById('timer-panel').classList.remove('urgent');
   
    showScreen('screen-start');
  }
   
  // ===== EVENTOS DOM =====
  document.getElementById('btn-play').addEventListener('click', startGame);
   
  document.getElementById('btn-event-ok').addEventListener('click', () => {
    document.getElementById('event-overlay').classList.add('hidden');
    state.eventShown = false;
  });
   
  document.getElementById('btn-confirm').addEventListener('click', confirmSelection);
  document.getElementById('btn-cancel').addEventListener('click', cancelSelection);
   
  document.getElementById('btn-finalizar').addEventListener('click', finalize);