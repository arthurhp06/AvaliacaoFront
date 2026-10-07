document.addEventListener('DOMContentLoaded', () =>{
    const btnCalcular = document.getElementById('btnCalcular');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultadosDiv = document.getElementById('resultados');

    btnCalcular.addEventListener('click', () => {
        const v1 = parseFloat(num1Input.value);
        const v2 = parseFloat(num2Input.value);

        if (isNaN(v1) || isNaN(v2)) {
            resultadosDiv.innerHTML = `<p class="erro-msg">Por faovr, preencha os dois números para calcular.</p>`;
            return;
        }
        const soma = v1 + v2;
        const subtracao = v1 - v2;
        const multiplicacao = v1 * v2;
        const divisao = v2 !== 0 ? (v1 / v2).toFixed(2) : 'Divisão por 0';

        resultadosDiv.innerHTML = `
        <div>Soma: <strong>${soma}</strong></div>
        <div>Subtração: <strong>${subtracao}</strong></div>
        <div>Multiplicação: <strong>${multiplicacao}</strong></div>
        <div>Divisão: <strong>${divisao}</strong></div>
        `
    })
})