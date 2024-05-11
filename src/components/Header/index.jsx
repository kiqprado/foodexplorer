import { PiReceipt, PiList } from "react-icons/pi";
import { Logo } from '../Logo'
import { ButtonIcon } from '../ButtonIcon'
import { SideMenu } from '../SideMenu'
import { Container } from './styles'

export function Header() {
  

  return(
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
      />

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