const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Juliana Inocencio",
        imagem:"https://github.com/juliana-inocencio",
        minibio: "Desenvolvedora e Estudante"
    },
    {
        nome: "Lady Gaga",
        imagem: "cantora, compositora, instrumentista, atriz, produtora musical e empresária estadunidense",
        minibio: "https://www.adorocinema.com/personalidades/personalidade-417702/"
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta,mostraPorta)