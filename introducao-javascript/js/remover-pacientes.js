var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    //var alvoEvento = event.target; //pega o td
    //var paiDoAlvo = alvoEvento.parentNode; // pega o pai, ou seja, o tr
    //paiDoAlvo.remove();

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
      event.target.parentNode.remove();
    },500);

});

// pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function(){
//     this.remove();
//   })
//
// });
