let idade = [18, 19, 9, 28, 25, 46, 2, 55, 36, 14];

let achou = "n";

for (let i = 0; i < 10 && achou == "n"; i++) {
  if (idade[i] == 46) {
    alert("A idade 46 está cadastrada na posição " + i);

    achou = "s";
  }
}

if (achou == "n") {
  alert("Não consta o cadastro dessa idade");
}
