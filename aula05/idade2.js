let idade = [];
let achou = 'n', resp = 's';
let idade_procurar;

for (let i=0; resp == 's'; i++){
     idade[i] = prompt ("Digite uma idade");
     resp = prompt ("Deseja continuar? s/n");
}

 idade_procurar = parseInt (prompt ("Qual idade deseja procurar?"));

 for (let i=0; (achou == 'n' && idade.length > i); i++){
     if (idade[i] == idade_procurar){
     achou = 's';
}
}

if (achou == 'n'){
alert ("Não consta o cadastro dessa idade");
} else{
alert ("A idade " + idade_procurar + " está cadastrada na posição " + i);
}