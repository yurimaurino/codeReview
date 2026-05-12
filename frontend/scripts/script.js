async function buscarDados(){
  const requisicao = await fetch("http://localhost:3000/dados")
  const dados = await requisicao.json()

  const mensagem = dados.choices[0].message.content
  console.log(mensagem)

  document.getElementById("resposta").textContent = mensagem
}