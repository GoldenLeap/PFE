const nomeElement = document.getElementById("nome");
const nomeForm = document.getElementById("nomeForm");
const quantChar = document.getElementById("quantChar");
function formatNom(){
    let numVal = nomeElement.value;
    numVal = numVal.trim().toUpperCase();
    temp = numVal.split(" ").join("");
    console.log(temp.length);
    quantChar.innerHTML = temp.length;

    nomeForm.innerHTML = numVal;

}