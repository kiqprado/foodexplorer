import { useState } from 'react'

import { PiReceipt, PiList } from "react-icons/pi";

import { Logo } from '../Logo'
import { ButtonIcon } from '../ButtonIcon'
import { SideMenu } from '../SideMenu'
import { OrderClient } from '../OrderClient';

import { Container, OrderSection } from './styles'

export function Header({ setSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOrderOpen, setIsOrderOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleOrder = () => {
    setIsOrderOpen(!isOrderOpen);
  }

  return(
    <Container>
      <SideMenu
        menuIsOpen={isMenuOpen} 
        closeMenu={() => setIsMenuOpen(false)}
        onSearch={setSearch}
      />

      <ButtonIcon 
        onClick={toggleMenu}
        icon={PiList}
      />

      <Logo
        size={22}
      />

      <OrderClient
        orderIsOpen={isOrderOpen}
        closeOrder={() => setIsOrderOpen(false)}
      />
      
      <OrderSection>
        <span>01</span>

        <ButtonIcon
          onClick={toggleOrder}
          icon={PiReceipt}
        />

      </OrderSection>
      
    </Container>
  )
}