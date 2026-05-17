const inputUsuario = document.querySelector('#inputButton')
async function buscarDados(){

  const codigo = document.querySelector("#req").value
  const blocoPreview = document.querySelector(".bloco-preview")
  
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
  blocoPreview.textContent = dados.resposta
}
inputUsuario.addEventListener("click", buscarDados)