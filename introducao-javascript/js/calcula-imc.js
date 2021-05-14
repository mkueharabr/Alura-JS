var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
  var paciente = pacientes[i];

  var tdAltura = paciente.querySelector(".info-altura");
  var tdPeso = paciente.querySelector(".info-peso");
  var tdImc = paciente.querySelector(".info-imc");

  var altura = tdAltura.textContent;
  var peso = tdPeso.textContent;

  var alturaEhValida = validaAltura(altura);
  var pesoEhValido = validaPeso(peso);

  if (!pesoEhValido) {
      console.log("Peso inválido!");
      tdImc.textContent = "Peso inválido!";
      pesoEhValido = false;

    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
    }

    if (alturaEhValida && pesoEhValido) {

        var imc =calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {

        paciente.classList.add("paciente-invalido");
    }

  }

  function calculaImc(peso, altura){
      var imc = 0;
      imc = peso / (altura * altura);
      return imc.toFixed(1);
  }

  function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
      return true;
    } else{
      return false;
    }
  }

  function validaAltura(altura){
    if(altura > 0 && altura <= 3){
      return true;
    } else {
      return false;
    }
  }

  function validaGordura(gordura){
    if(gordura >=0 && gordura <= 100){
      return true;
    } else {
      return false;
    }
  }
