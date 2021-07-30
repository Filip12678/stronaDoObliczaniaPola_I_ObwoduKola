function myFunction() {
srednica = prompt("Podaj długość średnicy koła");

const obliczaniePolaKola = function(srednica) {
    srednica = srednica / 2;
    srednica = srednica * srednica;
    srednica = srednica * Math.PI;
    return srednica;
}

const obliczanieObwoduKola = function(srednica) {
    srednica = srednica * Math.PI;
    return srednica;
}

 pole = obliczaniePolaKola(srednica);
 obwod = obliczanieObwoduKola(srednica);
 console.log(`Pole koła o średnicy ${srednica} wynosi: ${pole}`);
 console.log(`Obwód koła o średnicy ${srednica} wynosi: ${obwod}`);
 alert(`Pole koła o średnicy ${srednica} wynosi: ${pole}, a obwód tego koła wynosi: ${obwod}`);
}