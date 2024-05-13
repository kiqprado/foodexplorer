import { useAuth } from '../../hooks/auth'

import { PiX, PiMagnifyingGlass } from 'react-icons/pi'
import { ButtonIcon } from '../ButtonIcon'
import { Input } from '../Input'
import { Container, Header, Content } from './styles'

export function SideMenu({ menuIsOpen, closeMenu }) {
  const { signOut } = useAuth()

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

          <div className="line">
            <a href="#" onClick={signOut}>Sair</a>
          </div>
        </Content>
      </main>

      
    </Container>
  )
}