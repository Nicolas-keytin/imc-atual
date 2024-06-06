function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const biotype = document.getElementById('biotype').value;

    if (isNaN(weight) || isNaN(height)) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = weight / (height * height);
    let resultText = `Seu IMC é ${imc.toFixed(2)}. `;

    if (biotype === 'magro') {
        if (imc < 18.5) {
            resultText += 'Você está abaixo do peso.';
        } else if (imc < 24.9) {
            resultText += 'Você está com peso normal.';
        } else {
            resultText += 'Você está acima do peso.';
        }
    } else if (biotype === 'normal') {
        if (imc < 18.5) {
            resultText += 'Você está abaixo do peso.';
        } else if (imc < 24.9) {
            resultText += 'Você está com peso normal.';
        } else if (imc < 29.9) {
            resultText += 'Você está com sobrepeso.';
        } else {
            resultText += 'Você está com obesidade.';
        }
    } else if (biotype === 'gordo') {
        if (imc < 24.9) {
            resultText += 'Você está com peso normal.';
        } else if (imc < 29.9) {
            resultText += 'Você está com sobrepeso.';
        } else if (imc < 34.9) {
            resultText += 'Você está com obesidade grau I.';
        } else if (imc < 39.9) {
            resultText += 'Você está com obesidade grau II.';
        } else {
            resultText += 'Você está com obesidade grau III.';
        }
    }

    document.getElementById('result').innerText = resultText;
}