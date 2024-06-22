import { PiMinus, PiPlus } from 'react-icons/pi'

import { Container } from './styles'
import { ButtonIcon } from '../ButtonIcon'

export function Quantity({ quantity, setQuantity }) {

  function increment() {
    setQuantity(prevState =>(prevState < 10 ? prevState + 1 : prevState))
  }

  function decrement() {
    setQuantity(prevState =>(prevState > 1 ? prevState - 1 : prevState))
  }

  return(
    <Container>
      <ButtonIcon
        icon={PiMinus}
        onClick={decrement}
      />
      
        <span>{String(quantity).padStart(2, '0')}</span>

      <ButtonIcon
        icon={PiPlus}
        onClick={increment}
      />
    </Container>
  )
}