import { Container, Details } from './styles'

import DishImg from '../../assets/dish.png'

export function DishCardOrder({ data, ...rest}) {
  return(
    <Container {...rest}>
      <img src={DishImg} alt="Dish Image" />
      <Details>
          <h3>Dish name</h3>
          <a href="#">Remover dos pedidos</a>
      </Details>
    </Container>
  )
}