const sensoresIniciais = [
  { id: 1, nome: "Sensor Galpão A", tipo: "Temperatura", valor: 24.5, unidade: "°C", status: "normal" },
  { id: 2, nome: "Sensor Estufa 02", tipo: "Umidade", valor: 88.0, unidade: "%", status: "critico" },
  { id: 3, nome: "Sensor Compressor", tipo: "Pressão", valor: 6.2, unidade: "bar", status: "normal" },
  { id: 4, nome: "Sensor Câmara Fria", tipo: "Temperatura", valor: -2.1, unidade: "°C", status: "normal" },
  { id: 5, nome: "Sensor Almoxarifado", tipo: "Umidade", valor: 45.5, unidade: "%", status: "normal" },
  { id: 6, nome: "Sensor Caldeira", tipo: "Temperatura", valor: 98.4, unidade: "°C", status: "critico" }
];

function renderizarDashboard(lista_sensores) {
  var dashBoard = document.getElementById("card-board");

  dashBoard.innerHTML = "";

  lista_sensores.forEach(element => {
    let div = document.createElement("div");
    let nome = document.createElement("h3");
    let tipo = document.createElement("p");
    let data = document.createElement("p");
    
    div.classList.add("card");
    nome.textContent = element.nome;
    tipo.textContent = element.tipo;
    data.textContent = `${element.valor} ${element.unidade}`;

    let status = document.createElement("div");
    let status_val = document.createElement("p");
    status.classList.add("status_sensor");

    let dot = document.createElement("div");
    dot.classList.add("dot");

    switch (element.status) {
      case "normal":
        dot.classList.add("ok");
        status_val.textContent = "Normal";
        status_val.classList.add("ok");
        break;
      case "critico":
        dot.classList.add("error");
        status_val.textContent = "Crítico";
        status_val.classList.add("error");
        break;
    }

    status.appendChild(dot);
    status.appendChild(status_val);

    div.appendChild(nome);
    div.appendChild(tipo);
    div.appendChild(data);
    div.appendChild(status);

    dashBoard.appendChild(div);
  });
}

document.getElementById("reload").onclick = () => {
  renderizarDashboard(sensoresIniciais);
};

renderizarDashboard(sensoresIniciais);