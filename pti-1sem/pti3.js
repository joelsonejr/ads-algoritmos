function gasAndAlcoholPriceRatio(gasPrice, alcoholPrice) {
  if (gasPrice == 0 || alcoholPrice == 0) {
    return console.log("Valor inválido");
  }

  let priceRatio = alcoholPrice / gasPrice;

  //If gas and alcohol are costing the same, this variable is adjusted to 0.7, so
  // the recomendation will be to either one of them.
  if (priceRatio == 1) {
    priceRatio = 0.7;
  }
  
  return priceRatio;
}

function recomendedFuel(fuelPrice) {
  let fuelChoice = "Alcool ou Gasolina";

  let alcohol = fuelPrice < 0.7;
  let gas = fuelPrice > 0.7;

  switch (true) {
    case alcohol:
      fuelChoice = "Alcool";
      break;
    case gas:
      fuelChoice = "Gasolina";
      break;
    default:
      return fuelChoice;
      break;
  }

  return fuelChoice;
}

function wichFuelToUse() {
  let answer = "";
  let endProgram = true;

  while (endProgram === true) {
    //Using prompt to retrieve fuel value from user
    let gasolinePrice = prompt("Qual o preço da Gasolina? ");
    let alcoholPrice = prompt("Qual o preço do Alcool? ");

    let fuelPrice = gasAndAlcoholPriceRatio(gasolinePrice, alcoholPrice);
    
    answer = recomendedFuel(fuelPrice);

    alert(` Você deve abastecer com: ${answer}`);

    endProgram = confirm("deseja repetir o cálculo?");
  }
}

wichFuelToUse();
