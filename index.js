function converter() {
  var cpf = document.getElementById("nmber");

  var numcpf = cpf.value;

  let conversao = numcpf.replace(/\W/g, "");

  document.getElementById(
    "saida"
  ).innerHTML = `<p>Cpf/Cnpj convertido: ${conversao}</p>`;
}
