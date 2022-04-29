import { useEffect, useRef, useState } from "react"
import Header from "../components/Header"
import { api } from "../services/api"
import { Container, Card } from "../styles/home"

export default function Home() {
  const [input, setInput] = useState("")

  const handleSearch = async () => {
    if (input === "") {
      alert("Preencha o campo de busca")
      return
    }

    try {
      const response = await api.get(`/${input}`)
      console.log(response)
    } catch {
      alert("Erro filha da puta")
    }
  }

  return (
    <div>
      <Header />
      <Container>
        <Card>
          <h1>Rastrear Encomenda</h1>
          <p>Informe o código de rastreio abaixo para rastreamento</p>
          <form>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              type="text"
            />
            <button onClick={handleSearch} type="button">
              Rastrear Agora!
            </button>
          </form>
        </Card>
      </Container>
    </div>
  )
}
