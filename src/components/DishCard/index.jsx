import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { PiHeart } from 'react-icons/pi'
import { FcLike } from "react-icons/fc"

import { Container, Details } from './styles'

import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'
import { ButtonIcon } from '../../components/ButtonIcon'

import dishPlaceholder from '../../assets/dishPlaceholder.svg'


export function DishCard({ data, onDetailsClick, ...rest}) {
  const [ favorite, setIsFavorite] = useState(false)

  const { user } = useAuth()
  
  const dishAvatar = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : dishPlaceholder

  async function handleNewFavorite() {
    try {
      await api.post("/favorites", {
        dish_id: data.id    
      });
      setIsFavorite(!favorite);
    } catch (error) {
      console.error("Erro ao adicionar aos favoritos:", error);
    }
  }

  return(
    <Container {...rest}>

      <ButtonIcon
        icon={favorite ?  FcLike : PiHeart }
        onClick={handleNewFavorite}
      />

      <Details onClick={onDetailsClick}>

        <img src={dishAvatar} alt={data.title} />

        <h4>{data.title}</h4>

        <span>R$ {data.price}</span>
      </Details>
      
      <Quantity/>

      <Button
        title="incluir"
      />
    </Container>
  )
}