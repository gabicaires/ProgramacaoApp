function sortear() {
    const tipoJogo = document.getElementById("tipoJogo").value;
    let numeros;

    if (tipoJogo === "mega") {
        numeros = sortearNumeros(60, 6);
    } else if (tipoJogo === "quina") {
        numeros = sortearNumeros(80, 5);
    } else if (tipoJogo === "loto") {
        numeros = sortearNumeros(25, 15);
    }

    document.getElementById("resultado").innerText = "Números sorteados: " + numeros.join(", ");
}

function sortearNumeros(max, quantidade) {
    const numeros = [];
    while (numeros.length < quantidade) {
        const num = Math.floor(Math.random() * max) + 1;
        if (!numeros.includes(num)) {
            numeros.push(num);
        }
    }
    return numeros.sort((a, b) => a - b);
}