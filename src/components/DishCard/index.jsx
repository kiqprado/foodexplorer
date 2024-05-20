import { PiHeart } from 'react-icons/pi'

import { Container } from './styles'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'
import { ButtonIcon } from '../../components/ButtonIcon'

export function DishCard({ data, ...rest}) {

  return(
    <Container {...rest}>

      <ButtonIcon
        icon={PiHeart}
      />

      <img src={data.avatar} alt="" />

      <h4>{data.title}</h4>


      <span>R$:{data.price}</span>

      <Quantity/>

      <Button
        title="incluir"
      />
    </Container>
  )
}