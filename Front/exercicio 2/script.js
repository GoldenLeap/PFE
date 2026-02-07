const cardName =  document.getElementById("nome");
const nameInput =  document.getElementById("nomeInput");
const cardCargo =  document.getElementById("cargo");
const cargoInput =  document.getElementById("cargoInput");
const cardColor = document.getElementById("cardCol")
const card = document.querySelector(".card");

function updateName(){
    cardName.textContent = nameInput.value || '[digite o nome]';

}
function updateCargo(){
    cardCargo.textContent = cargoInput.value;
}
function updateCardCol(){
    let color = cardColor.value || '-';
    card.style.setProperty("--card-color", color)

}