var valorFinal = document.querySelector(".secao-hora .secao__rodape__valor span"); //pega o inicio do form até o final, e depois a tag que tem que sair a resposta)
var inputGanhoMes = document.querySelector('#ganho-mes'); //# é para id e . é para classe
var inputGanhoHoras = document.querySelector('#horas-dia');


function calcularValorHora(){
  var calculoHoraMes = inputGanhoHoras.valueAsNumber * 21;
  var valorDaHora = (inputGanhoMes.valueAsNumber / calculoHoraMes).toFixed(2);
  valorFinal.textContent =  'R$ ' + valorDaHora;
}
//valorFinal.textContent = 1.15;
console.log(inputGanhoMes.value);


/*entrada de dado = ganho-mes;
entrada de horas = horas-dia;
secao = secao, secao-hora;
secao do valor= secao__rodape__valor*/

// nao precisa de aspa simples '' em  numero