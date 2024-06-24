import { Container, Details, Link } from './styles'

import DishImg from '../../assets/dish.png'

export function DishCardTemplate({ data, onOrder, ...rest}) {
  return(
    <Container {...rest}>
      <img src={DishImg} alt="Dish Image" />
      <Details>
          <h3>Dish name</h3>
          <Link>
            {onOrder ? 'Remover dos pedidos' : 'Remover dos favoritos'}
          </Link>
      </Details>
    </Container>
  )
}