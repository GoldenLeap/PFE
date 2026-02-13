const compromissoElement = document.getElementById("compData");
const daysConv = 1000 * 60 * 60* 24;
const diasRest = document.getElementById("diasRestantes");
function calcularDias(){
    let hoje = Date.now();  
    let compromissoVal = compromissoElement.value;
    let compromissoDate = Date.parse(compromissoVal);
    
    let compromissoDay = compromissoDate - hoje;
    compromissoDay /= daysConv;
    diasRest.innerHTML = Math.ceil(compromissoDay) >= 0? Math.ceil(compromissoDay) : "Já passou"; 


    

}