import { api } from '../../services/api'

import { PiHeart } from 'react-icons/pi'

import { Container } from './styles'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'
import { ButtonIcon } from '../../components/ButtonIcon'

import dishPlaceholder from '../../assets/dishPlaceholder.svg'


export function DishCard({ data, ...rest}) {
  
  const dishAvatar = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : dishPlaceholder

  return(
    <Container {...rest}>

      <ButtonIcon
        icon={PiHeart}
      />

      <img src={dishAvatar} alt={data.title} />

      <h4>{data.title}</h4>


      <span>R$ {data.price}</span>

      <Quantity/>

      <Button
        title="incluir"
      />
    </Container>
  )
}