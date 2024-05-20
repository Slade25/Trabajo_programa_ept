const origenSelect = document.getElementById('origen');
const destinoSelect = document.getElementById('destino');
const resultadoDiv = document.getElementById('resultado');

function calcularDistancia(origen, destino) {
    const distancias = {
        "parque_concepcion": {
            "piedra_parada": 2557.2,
            "ingenio_valle_azul": 5787.35,
            "santa_rosa_ocopa": 6592.35,
        }
    };

    // Obtener la distancia correspondiente desde la tabla de distancias
    return distancias[origen][destino];
}

// Función para calcular la ruta
function calcularRuta() {
    const origen = origenSelect.value;
    const destino = destinoSelect.value;

    // Calcular la distancia entre el origen y el destino
    const distancia = calcularDistancia(origen, destino);

    // Velocidad promedio en metros por segundo para distintos medios de transporte
    const velocidadCaminando = 1.4; // m/s
    const velocidadBicicleta = 5.5; // m/s
    const velocidadAuto = 13.8889; // m/s

    // Calcular el tiempo en base a la velocidad
    const tiempoCaminando = distancia / velocidadCaminando;
    const tiempoBicicleta = distancia / velocidadBicicleta;
    const tiempoAuto = distancia / velocidadAuto;

    // Mostrar los resultados en el div de resultado
    resultadoDiv.innerHTML = `
        <h2>Resultados</h2>
        <p>Origen: ${origen.replace('_', ' ')}</p>
        <p>Destino: ${destino.replace('_', ' ')}</p>
        <p>Distancia: ${distancia} metros</p>
        <p>Tiempo caminando: ${tiempoCaminando.toFixed(2)} segundos (${(tiempoCaminando / 60).toFixed(2)} minutos)</p>
        <p>Tiempo en bicicleta: ${tiempoBicicleta.toFixed(2)} segundos (${(tiempoBicicleta / 60).toFixed(2)} minutos)</p>
        <p>Tiempo en auto: ${tiempoAuto.toFixed(2)} segundos (${(tiempoAuto / 60).toFixed(2)} minutos)</p>
        <p>Velocidad caminando: ${velocidadCaminando} m/s</p>
        <p>Velocidad en bicicleta: ${velocidadBicicleta} m/s</p>
        <p>Velocidad en auto: ${velocidadAuto} m/s</p>
    `;
}


