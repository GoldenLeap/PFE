const salarioElement = document.getElementById("salario");
const aluguelElement = document.getElementById("aluguel");
const alimentacaoElement = document.getElementById("alimentacao");
const lazerElement = document.getElementById("lazer");
const totalElement = document.getElementById("total");

function calcularGasto(){
    const salario = parseFloat(salarioElement.value);
    const aluguel = parseFloat(aluguelElement.value);
    const alimentacao = parseFloat(alimentacaoElement.value);
    const lazer = parseFloat(lazerElement.value);

    if(isNaN(salario) || salario < 0){
        alert("Salario invalido");
        return;
    }
    if(isNaN(aluguel) || aluguel < 0){
        alert("Gastos com aluguel invalidos");
        return;
    }
    if(isNaN(alimentacao) || alimentacao < 0){
        alert("Gastos com alimentação invalidos");
        return;
    }
    if(isNaN(lazer) || lazer < 0){
        alert("Gastos com lazer invalidos");
        return;
    }
    let total = salario - (aluguel + alimentacao + lazer);
    totalElement.innerHTML = `R$: ${total}`;
    switch(true){
        case total < 0:
            alert("Saldo Negativo");
            break;
        case total > 0:
            alert("Saldo Positivo");
            break;
        case total == 0:
            alert("No Limite");
            break;
        default:
            alert("Valor invalido");
            break;
    }
} 