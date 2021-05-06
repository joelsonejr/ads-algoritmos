
let firstGrade = parseFloat(prompt('Insira a primeira nota'))
let secondGrade = parseFloat(prompt('Insira a segunda nota'))

let average = (firstGrade + secondGrade) / 2

if(average >= 7) {
  alert('Você foi aprovado')
}
else{
  alert('Voce foi reprovado')
}

