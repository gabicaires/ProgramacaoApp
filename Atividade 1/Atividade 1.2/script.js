function converter() {
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;

    let resultado;

    if (de === para) {
        resultado = temperatura;
    } else if (de === "celsius") {
        if (para === "fahrenheit") {
            resultado = (temperatura * 9/5) + 32;
        } else if (para === "kelvin") {
            resultado = temperatura + 273.15;
        }
    } else if (de === "fahrenheit") {
        if (para === "celsius") {
            resultado = (temperatura - 32) * 5/9;
        } else if (para === "kelvin") {
            resultado = (temperatura - 32) * 5/9 + 273.15;
        }
    } else if (de === "kelvin") {
        if (para === "celsius") {
            resultado = temperatura - 273.15;
        } else if (para === "fahrenheit") {
            resultado = (temperatura - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado.toFixed(2) + " " + para;
}