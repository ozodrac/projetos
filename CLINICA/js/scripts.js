function validar() {
  var nome = formulario.nome.value;
  var email = formulario.email.value;
  var msg = formulario.msg.value;

if (nome,email,msg == "") {

  alert("Preencha os campos em branco")
    // formulario.nome.focus();
    return false;
 }
 else {
   alert("Enviado com sucesso!")
 }
}
