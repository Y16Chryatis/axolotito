
// Display the input in console
console.log("now runing");

function axolote() {
    
    let axolotl = {
        nutricion: 100,
        diversion: 100,
        energia: 100,
        salud: 100,
        vida: 20
    }
    return axolotl;

}

function randomIn(initValue, endValue) {
  initValue = Math.ceil(initValue);
  endValue = Math.floor(endValue);  
  
  return Math.floor(Math.random() * (endValue - initValue + 1)) + initValue;
}

function reducirEstado(axolotl){
    let select = randomIn(0, 3);
    let valor = randomIn(1, 10);
    let estados = ["nutricion", "diversion", "energia", "salud"];
    
    axolotl[estados[select]] -= valor;
    
    if (axolotl[estados[select]] < 0) {
        axolotl[estados[select]] = 0;
        axolotl.salud -= 1;
    }

    if (axolotl.salud <= 0) {
        axolotl.salud = 0;
        axolotl.vida -= 1;
    }
    return axolotl;

}

function mejorarEstado(axolotl, estado){
    let mejora = 100

    axolotl[estado] += mejora;

    if (axolotl[estado] > 100){
        axolotl[estado] = 100;
    }
    return axolotl;
}

function muerteNatural(axolotl) {
    axolotl.vida -= 1;	
}

function vidaAxolote() {
    
    let axolotl = axolote();
    
    const runTamagochi = setInterval(() => {

    if (axolotl.vida > 0) {
      console.clear();
      console.log(`Salud: ${axolotl.salud}`);
      console.log(`Energía: ${axolotl.energia}`);
      console.log(`Diversión: ${axolotl.diversion}`);
      console.log(`Nutrición: ${axolotl.nutricion}`);
      console.log(`Vida: ${axolotl.vida}`);

      reducirEstado(axolotl);
      muerteNatural(axolotl);

    } else {
        console.clear();
        window.location.href = "end.html";
    }

  }, 500);
}

vidaAxolote();
