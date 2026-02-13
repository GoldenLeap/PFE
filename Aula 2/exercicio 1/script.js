const celsiusElement = document.getElementById("celsius");

function celsiusToFahrenheit (){
    let celsius = parseFloat(celsiusElement.value);
    if(isNaN(celsius)) return alert("Invalido");
    fahrenheit = celsius * 1.8 + 32;
        if(fahrenheit >= 80){
            document.body.style.backgroundColor = "coral";
        }else{
            document.body.style.backgroundColor = "lightskyblue"
        }
    
    document.getElementById('f').textContent = fahrenheit.toString()

}