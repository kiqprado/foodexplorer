import { PiX, PiMagnifyingGlass } from 'react-icons/pi'

import { ButtonIcon } from '../ButtonIcon'
import { Input } from '../Input'
import { Container, Header, Content } from './styles'

export function SideMenu({ menuIsOpen, closeMenu }) {
  return(
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <ButtonIcon onClick={closeMenu}
          icon={PiX}
        />
        <h3>Menu</h3>
      </Header>

      <main>
        <Content>
          <Input
            icon={PiMagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
          />

          <a href="#">Sair</a>
        </Content>
      </main>

      
    </Container>
  )
}