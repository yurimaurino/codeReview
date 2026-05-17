const express = require("express")
const cors = require("cors")
require("dotenv").config()
 
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("../frontend"))

let perguntaUsuario = ""

app.post("/dados", (req, res) => {

  perguntaUsuario = req.body.codigo

  res.status(200).json({
    mensagem: "Pergunta Salva"
  })
})

app.get("/dados", async (_, res) => {

  const url = "https://api.groq.com/openai/v1/chat/completions"
  const resposta = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.API_KEY
    },
    body: JSON.stringify({
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      messages: [
        {
          "role": "user",
          "content": perguntaUsuario
        }
      ]
    })
  })

  const dados = await resposta.json()
  const respostaIa = dados.choices[0].message.content
  
  res.status(200).json({
    resposta: respostaIa
  })
})

app.listen(process.env.PORT, () => {
  console.log("Servidor Rodando")
})