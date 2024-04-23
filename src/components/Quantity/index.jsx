import { PiMinus, PiPlus } from 'react-icons/pi'

import { Container } from './styles'
import { ButtonIcon } from '../ButtonIcon'

export function Quantity() {
  return(
    <Container>
      <ButtonIcon
        icon={PiMinus}
      />
        <span>01</span>
      <ButtonIcon
        icon={PiPlus}
      />
    </Container>
  )
}