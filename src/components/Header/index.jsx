import { useState } from 'react'

import { PiReceipt, PiList } from "react-icons/pi";
import { Logo } from '../Logo'
import { ButtonIcon } from '../ButtonIcon'
import { SideMenu } from '../SideMenu'
import { Container } from './styles'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return(
    <Container>
      <SideMenu
        menuIsOpen={isMenuOpen} 
        closeMenu={() => setIsMenuOpen(false)}
      />

      <ButtonIcon 
        onClick={toggleMenu}
        icon={PiList}
      />

      <Logo
        size={22}
      />

      <ButtonIcon
        icon={PiReceipt}
      />
      
    </Container>
  )
}