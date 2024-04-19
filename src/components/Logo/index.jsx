import { Container } from './styles'
import Polygon from '../../assets/Polygon.svg'

export function Logo() {
  return(
    <Container>
      <img src={Polygon}/>
      <h1>food explorer</h1>
    </Container>
  )
}