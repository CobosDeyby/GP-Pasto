const fechaInicio = new Date("2022-08-07").getTime();
const contador = document.querySelector('.numero_dias');

setInterval(function () {
    const ahora = new Date().getTime();
    const diferencia = ahora - fechaInicio;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    contador.innerHTML = `
        <span>${dias.toString()[0]}</span>
        <span>${dias.toString()[1]}</span>
        <span>${dias.toString()[2]}</span>
        <span>${dias.toString()[3]}</span>
    `;
}, 1000);

