import { PiCaretLeft } from 'react-icons/pi' 
import { Container } from './styles'

export function ButtonBack() {
  return(
    <Container
      type="button"
    >
      <PiCaretLeft/> voltar
    </Container>
  )
}