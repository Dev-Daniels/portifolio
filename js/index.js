const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {
event.preventDefault(); // impede o reload da página

// Limpa os inputs
document.getElementById("nome").value = "";
document.getElementById("email").value = "";
document.getElementById("mensagem").value = "";

// Popup de confirmação
alert("Mensagem enviada com sucesso!");
});