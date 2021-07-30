var valorFinal = document.querySelector(".container .secao__rodape__valor span"); 
var inputValorHora = document.querySelector('#valor-hora'); 
var inputHorasProjeto = document.querySelector('#horas-projeto');


function calcularValorProjeto(){
  var valorTotal = (inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber).toFixed(2);
 
  valorFinal.textContent =  'R$ ' + valorTotal;
}
