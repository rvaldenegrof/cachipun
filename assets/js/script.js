//Solicita datos al usuario
//var cantidadDePartidas = +prompt("Ingresa la cantidad de partidas que deseas jugar: ", "2");

var opciones = ["Piedra", "Papel", "Tijera"];
do {
    var cantidadDePartidas = +prompt("Ingrese la cantidad de partidas: ");
} while (isNaN(cantidadDePartidas) || cantidadDePartidas < 0);


if(cantidadDePartidas > 0){
    var puntosPlayer = 0;
    var puntosComputer = 0;

    for(i = 1; i <= cantidadDePartidas; i++){
        do {
            var desicionPlayer = +prompt(`

            Partida nº: ${i}
            Ingrese su opción:
        
            - 1) Piedra
            - 2) Papel
            - 3) Tijera
        
        `);
        } while (isNaN(desicionPlayer) || desicionPlayer < 1  || desicionPlayer > 3);
        
        const desicionComputer = Math.floor((Math.random() * 3 + 1));
        alert("El computador eligió la opción: "+ desicionComputer /* opciones[desicionComputer -1] */);
        
        var p = desicionPlayer;
        var c = desicionComputer;
        
        // lógica del ganador
        if(p == c) alert("Empate po compadre"), puntosComputer++, puntosPlayer++;// si es empate, a ambos da 1 punto
        else if(p == 1 && c == 2) alert("El computador ganó"), puntosComputer++;
        else if(p == 1 && c == 3) alert("El jugador ganó"), puntosPlayer++;
        
        else if(p == 2 && c == 3) alert("El computador ganó"), puntosComputer++;
        else if(p == 2 && c == 1) alert("El jugador ganó"), puntosPlayer++;
        
        else if(p == 3 && c == 1) alert("El computador ganó"), puntosComputer++;
        else if(p == 3 && c == 2) alert("El jugador ganó"), puntosPlayer++;
    }

/*     if(puntosPlayer > puntosComputer){
        document.write("Ganaste!");
    } else if (puntosPlayer < puntosComputer) {
        document.write("Ganó the MACHINE");
    } else {
        document.write("EMPATE");
    } */

    document.write(`
        Puntaje final: <br>
        - Jugador: ${puntosPlayer} <br>
        - Computador: ${puntosComputer}
    `);

} else {
    alert("Para otra vez será")
}