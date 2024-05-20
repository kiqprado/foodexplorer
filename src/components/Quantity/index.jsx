import { useState } from 'react'
import { PiMinus, PiPlus } from 'react-icons/pi'

import { Container } from './styles'
import { ButtonIcon } from '../ButtonIcon'

export function Quantity() {
  const [ count, setCount ] = useState(1)

  const increment = () => {
    setCount(prevState =>(prevState < 10 ? prevState + 1 : prevState))
  }
  const decrement = () => {
    setCount(prevState =>(prevState > 1 ? prevState - 1 : prevState))
  }

  return(
    <Container>
      <ButtonIcon
        icon={PiMinus}
        onClick={decrement}
      />
      
        <span>{String(count).padStart(2, '0')}</span>

      <ButtonIcon
        icon={PiPlus}
        onClick={increment}
      />
    </Container>
  )
}