// Dados iniciais
const sensoresIniciais = [
  { id: 1, nome: "Sensor Galpão A", tipo: "Temperatura", valor: 24.5, unidade: "°C", status: "normal" },
  { id: 2, nome: "Sensor Estufa 02", tipo: "Umidade", valor: 88.0, unidade: "%", status: "critico" },
  { id: 3, nome: "Sensor Compressor", tipo: "Pressão", valor: 6.2, unidade: "bar", status: "normal" },
  { id: 4, nome: "Sensor Câmara Fria", tipo: "Temperatura", valor: -2.1, unidade: "°C", status: "normal" },
  { id: 5, nome: "Sensor Almoxarifado", tipo: "Umidade", valor: 45.5, unidade: "%", status: "normal" },
  { id: 6, nome: "Sensor Caldeira", tipo: "Temperatura", valor: 98.4, unidade: "°C", status: "critico" }
];

// Estado da aplicação
let sensores = [...sensoresIniciais];

// Elementos do DOM
const cardBoard = document.getElementById("card-board");
const filterSelect = document.getElementById("filter-type");
const reloadBtn = document.getElementById("reload");
const lastUpdateSpan = document.getElementById("last-update");

// Função para renderizar o Dashboard dinamicamente
function renderizarDashboard(listaSensores) {
  cardBoard.innerHTML = "";

  listaSensores.forEach(sensor => {
    // Criar o container do card
    const card = document.createElement("div");
    card.classList.add("card");

    if (sensor.status === "critico") {
      card.classList.add("card-alerta");
    }
    // Estrutura interna via template literals `${val}`
    card.innerHTML = `
      <h3>${sensor.nome}</h3>
      <p class="valor">${sensor.valor.toFixed(1)} ${sensor.unidade}</p>
      <p class="tipo">Tipo: ${sensor.tipo}</p>
      <div class="connection-status">
        <div class="dot ${sensor.status === 'critico' ? 'error' : 'ok'}"></div>
        <span>${sensor.status.toUpperCase()}</span>
      </div>
    `;

    cardBoard.appendChild(card);
  });

  atualizarTimestamp();
}

// Função para atualizar o footer com hora atual
function atualizarTimestamp() {
  const agora = new Date();
  const horaFormatada = agora.toTimeString().split(' ')[0];
  lastUpdateSpan.textContent = horaFormatada;
}

// Lógica de Filtros
filterSelect.addEventListener("change", (e) => {
  const tipoSelecionado = e.target.value;
  
  if (tipoSelecionado === "Todos") {
    renderizarDashboard(sensores);
  } else {
    const listaFiltrada = sensores.filter(sensor => sensor.tipo === tipoSelecionado);
    renderizarDashboard(listaFiltrada);
  }
});

// Simulação de alteração de dados em tempo real
function simularAtualizacaoDados() {
  sensores = sensores.map(sensor => {
    // Altera o valor levemente entre -1.5 e +1.5
    const variacao = (Math.random() * 3) - 1.5;
    let novoValor = sensor.valor + variacao;
    

    // Evitar valores absurdos
    if (sensor.tipo === "Temperatura") {
      sensor.status = novoValor > 35 ? "critico" : "normal";
    }
    if (sensor.tipo === "Umidade"){
      novoValor = clamp(novoValor, 0, 100);
      sensor.valor = clamp(sensor.valor, 0, 100);
    }
    if(sensor.tipo === "Pressão"){
       novoValor = novoValor <= 0? 0: novoValor;
       sensor.valor = sensor.valor <= 0? 0: sensor.valor;
    }

    return {
      ...sensor,
      valor: novoValor
    };
  });

  filterSelect.dispatchEvent(new Event('change'));
}

// Simula atualização a cada 30 segundos
reloadBtn.addEventListener("click", simularAtualizacaoDados);
setInterval(simularAtualizacaoDados, 30000);

// Inicialização da Página
renderizarDashboard(sensores);


function clamp(val, min, max){
  if(val < min) val = min;
  if(val > max) val = max;
  return val;
}