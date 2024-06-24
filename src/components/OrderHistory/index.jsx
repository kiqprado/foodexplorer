import { Container } from './styles'

export function OrderHistory() {
  return(
    <Container>
      <div className="detailsORderHistory">
      
        <span>000004</span>

        <div className="status">
          <span className='statusColor'></span>
          <h5>Pendente</h5>
        </div>

        <div className="dateTime">
          <span>20/05 às 18h00</span>
        </div>

      </div>

      <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
    </Container>
  )
}