import { PiReceipt, PiList } from "react-icons/pi";

import { Container } from './styles'

import { Logo } from '../Logo'
import { ButtonIcon } from '../ButtonIcon'

export function Header() {

  return(
    <Container>
      <ButtonIcon
        icon={PiList}
      />

      <Logo/>

      <ButtonIcon
        icon={PiReceipt}
      />
      
    </Container>
  )
}