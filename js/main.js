const formulario = document.querySelector(".formulario");

const usuarioInput = document.querySelector("#usuario");
const senhaInput = document.querySelector("#password");
const tituloFormulario = document.querySelector("#titulo");

const urlApi = 'http://localhost:8080/usuario';

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const titulo = tituloFormulario.innerHTML;

  if(titulo === "Cadastrar" || titulo === "CADASTRAR"){
    cadastrar();
    limpaFormulario();

  }

  if(titulo === "Login" || titulo === "LOGIN"){
    realizarLogin();
    limpaFormulario();
  }

})

function cadastrar(){

  let endPointCadastro = `${urlApi}/cadastro`;
  fetch(endPointCadastro, {

    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      usuario: usuarioInput.value,
      senha: senhaInput.value
    })
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => alert(error))

}

function realizarLogin(){

  let endPointLogin = `${urlApi}/login`;
  fetch(endPointLogin, {

    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      usuario: usuarioInput.value,
      senha: senhaInput.value
    })
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => {
    console.error(error);
    alert("Erro ao realizar o login, usuário ou senha incorretos");
  });

}

function limpaFormulario(){
  usuarioInput.value = "";
  senhaInput.value = "";
}
