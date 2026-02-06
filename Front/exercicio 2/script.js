const cardName =  document.getElementById("nome");
const nameInput =  document.getElementById("nomeInput");
const cardCargo =  document.getElementById("cargo");
const cargoInput =  document.getElementById("cargoInput");
function updateName(){
    cardName.innerHTML = nameInput.value;

}
function updateCargo(){
    cardCargo.innerHTML = cargoInput.value;

}