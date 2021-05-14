var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  // não permite carregar a página ao clicar no botãoa
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  // extraindo informações do form
  var paciente = obterDadosDoFormulario(form);

  adicionaPacienteNaTabela(paciente);

  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
  // cria tr e td
  var pacienteTr = montaTr(paciente);

  // erros[]
  var erros = validaPaciente(paciente);

  if(erros.length > 0){
    exibirMensagemDeErro(erros);
    return;
  }

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function obterDadosDoFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  // acrescenta os tds dentro da tr
  pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

  return pacienteTr;

}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente){
  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("Nome não pode ser em branco");
  }

  if(paciente.peso.length == 0){
    erros.push("Peso não pode ser em branco");
  }

  if(paciente.gordura.length == 0){
    erros.push("Gordura não pode ser em branco");
  }

  if(paciente.altura.length == 0){
    erros.push("Altura não pode ser em branco");
  }

  if(!validaGordura(paciente.gordura)) {
    erros.push("% da gordura é inválido");
  }

  if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
  if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");

  return erros;
}

function exibirMensagemDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}
