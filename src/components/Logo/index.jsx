import { Container } from './styles'
import Polygon from '../../assets/Polygon.svg'

export function Logo({ size }) {
  return(
    <Container size={size} to="/">
      <img src={Polygon}/>
      <h1>food explorer</h1>
    </Container>
  )
}