import Header from "../components/Header"
import Link from "next/link"

import {
  HeaderResults,
  LiResults,
  Movimentacao,
  Status,
  Time,
  UlResults,
  Container,
  Card,
  InfoResults,
  SectionResults,
} from "../styles/results"

export default function Resultado() {
  return (
    <div>
      <Header />
      <Container>
        <SectionResults>
          <Card>
            <h2>Informações do rastreio</h2>
            <HeaderResults>
              <h3>Status</h3>
              <h3>Movimentação</h3>
            </HeaderResults>

            <ul>
              <li>
                <div>
                  <h5>Objeto entregue ao destinatario</h5>
                  <div className="p-time">
                    <p>22/12/2021</p>
                    <p>12:30:00</p>
                  </div>
                </div>
                <div>
                  <p>Unidade de Distribuição Salvador</p>
                </div>
              </li>
            </ul>
          </Card>

          <Link href="/">
            <button type="button">Nova Consulta</button>
          </Link>
        </SectionResults>
      </Container>
    </div>
  )
}
