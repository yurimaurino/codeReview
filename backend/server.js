const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("../frontend"))

app.get("/dados", async (req, res) => {
  const url = "https://api.groq.com/openai/v1/chat/completions"
  const resposta = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      messages: [
        {
          "role": "user",
          "content": "Olá"
        }
      ]
    })
  })

  const dados = await resposta.json()

  console.log(dados)
  res.json(dados)
})

app.listen(3000, () => {
  console.log("Servidor Rodando")
})