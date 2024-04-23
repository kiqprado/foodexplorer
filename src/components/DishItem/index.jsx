import { PiHeart } from 'react-icons/pi'

import { Container } from './styles'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'
import { ButtonIcon } from '../../components/ButtonIcon'

import Dish from '../../assets/dish.png'

export function DishItem({ data, ...rest}) {
  return(
    <Container {...rest}>

      <ButtonIcon
        icon={PiHeart}
      />

      {/*<img src={data.image} alt="" />*/}
      <img src={Dish} alt="" />

      {/*<h3>{data.title}</h3>*/}
      <h4>Macarrão Macarrão</h4>


      {/*<span>R$:{data.price}</span>*/}
      <span>R$: 49,90</span>

      <Quantity/>

      <Button
        title="incluir"
      />
    </Container>
  )
}