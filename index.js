function converter() {
  var cpf = document.getElementById("nmber");

  var numcpf = cpf.value;

  let conversao = numcpf.replace(/\W/g, "");

  alert("Número convertido com sucesso!");

  alert(conversao);
}
