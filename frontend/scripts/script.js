async function buscarDados(){

  const pergunta = document.getElementById('req').value
  
  const requisicao = await fetch("http://localhost:3000/dados",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pergunta: pergunta
    })
  })
  const dados = await requisicao.json()

  const mensagem = dados.choices[0].message.content
  console.log(mensagem)
}