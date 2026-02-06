/*
Exercício 1: Verificador de Turno e Prioridade
Contexto: Na sua agenda, cada tarefa tem uma hora (0-23) e um nível de prioridade (1
a 10). Tarefa: Escreva um script que:
1. Receba a hora e a prioridade.
2. Verifique se a hora está entre 0 e 11 (Manhã), 12 e 17 (Tarde) ou 18 e 23
(Noite).
3. Use um operador lógico para imprimir “TAREFA CRÍTICA/URGENTE” se a
prioridade for maior que 8 E o turno for "Manhã" ou “Tarde”.
4. Use um operador lógico para imprimir “TAREFA IMPORTANTE” se a prioridade
for maior ou igual a 7 e menor que 9 E o turno for “Manhã” ou“Tarde”.
5. Use um operador lógico para imprimir “TAREFA NÃO IMPORTANTE”
independentemente da prioridade E o turno for “Noite”. Esta agenda valoriza as
noites para lazer e não para tarefas.
6. Imprima "Horário Inválido" caso o número esteja fora de 0-23 e “Nível de
Prioridade Inválida” caso o número esteja fora de 1-10.
*/

function classifyTask(){
    const timeNode = document.getElementById("horario");
    const priorityNode = document.getElementById("prioridade");
    horario = "";
    time = parseInt(timeNode.value);
    priority = parseInt(priorityNode.value);
    if(isNaN(time) || !(time > 0 && time < 24)){ 
        alert("Erro, a hora não é valida") ; 
        return;
    }
    if(isNaN(priority) || !(priority >= 1 && priority <= 10)) 
    {
        alert("Nivel de prioridade invalida"); 
        return;
    }
        if(time < 12){
        horario = "Manhã";
    }
    else if(time < 18){
        horario = "Tarde";
    }else{
        horario = "Noite";
    }
    if(horario == "Manhã" || horario == "Tarde"){
        switch(true){
            case (priority >= 8):
                alert("TAREFA CRÍTICA/URGENTE");
                break;
            case(priority >= 7 && priority < 9):
                alert("TAREFA IMPORTANTE");
                break;
            default:
                alert("Tarefa não importante");
                break;
        }
    }else{
        alert("Tarefa não importante");
    }
}