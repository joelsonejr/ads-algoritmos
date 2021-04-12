//TODO:  create a variable 'validInput' to evalute the user input, and create a loop that will run until validInput is 'true'

function cleanInputBoxes() {
  let gasoline = document.getElementById("gasolineValue");
  let alcohol = document.getElementById("alcoholValue");

  gasoline.value = "";
  alcohol.value = "";
}

function gasOrAlcohol(gasPrice, alcoholPrice) {
  if (gasPrice == 0 || alcoholPrice == 0) {
    return console.log("Valor inválido");
  }

  let fuelPrice = alcoholPrice / gasPrice;

  //If gas and alcohol are costing the same
  if (fuelPrice == 1) {
    fuelPrice = 0.7;
  }

  return fuelPrice;
}

function fuelType(fuelPrice) {
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

  // the loop only makes sense when using 'alert' and 'prompt'
  while (endProgram === true) {
    location.reload();

    //grabbing values from the webpage
    /* let gasolinePrice = Number(document.getElementById('gasolineValue').value)
   let alcoholPrice = Number(document.getElementById('alcoholValue').value) */

    //Using prompt to retrieve user input
    let gasolinePrice = prompt("Qual o preço da Gasolina? ");
    let alcoholPrice = prompt("Qual o preço do Alcool? ");

    let fuelPrice = gasOrAlcohol(gasolinePrice, alcoholPrice);

    answer = fuelType(fuelPrice);

    alert(` O combustível indicado é: ${answer}`);

    endProgram = confirm("deseja repetir o cálculo?");
  }
}
