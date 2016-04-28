function validar() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var msg = document.getElementById('msg').value;

  function IsEmail(email){
  	var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
  	var check=/@[\w\-]+\./;
  	var checkend=/\.[a-zA-Z]{2,3}$/;
  	if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
  	else {return true;}
  }
  if(email == ''){
    document.getElementById('email').focus();
    sweetAlert("Email vazio!", "Favor preencha o campo de email.", "error");
    return false;
  }
  if (!IsEmail(email)){
   document.getElementById('email').focus();
   sweetAlert("Email inválido!", "Favor nos informe um email válido.", "error");
   return false;
  }
  if (nome == "") {
    document.getElementById('nome').focus();
    sweetAlert("Nome Vazio!", "Favor preencha o campo nome.", "error");
    return false;
   }
  if(msg == ''){
    document.getElementById('msg').focus();
    sweetAlert("Mensagem Vazia", "Vamos lá, nos envie uma mensagem.", "error");
    return false;
  }
  swal("Good job!", "You clicked the button!", "success");
}
