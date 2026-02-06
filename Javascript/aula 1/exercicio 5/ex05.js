let agendaHorarios = [8, 12, 25, 15, -
2, 20]
let horariosValidos = []
let cont = 0;
agendaHorarios.forEach(e=>{
    if(e >= 0 && e <=23){
        cont++;
        horariosValidos.push(e);
        alert(`Compromisso agendado para as ${e}h`);
    }else{
        alert(`O horario ${e} é invalido.`);
    }

})
alert(`Horarios validos: ${cont} - ${horariosValidos}`)
