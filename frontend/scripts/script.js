async function buscarDados(){

  const codigo = document.querySelector("#req").value
  
 await fetch("http://localhost:3000/dados", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      codigo: codigo
    })
  })

  const requisicao = await fetch("http://localhost:3000/dados")
  const dados = await requisicao.json()
  console.log(dados.resposta)
}