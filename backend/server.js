const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()
 
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("../frontend"))

app.post("/dados", async (req, res) => {

  const pergunta = req.body.pergunta 
  
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
          "content": pergunta
        }
      ]
    })
  })

  const dados = await resposta.json()

  res.json(dados)
})

app.listen(3000, () => {
  console.log("Servidor Rodando")
})