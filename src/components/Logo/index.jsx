import { Container } from './styles'
import Polygon from '../../assets/Polygon.svg'

export function Logo({ title }) {
  return(
    <Container>
      <img src={Polygon}/>
      <h1>{title}</h1>
    </Container>
  )
}