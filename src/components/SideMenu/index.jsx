import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

import { PiX, PiMagnifyingGlass } from 'react-icons/pi'

import { ButtonIcon } from '../ButtonIcon'
import { Input } from '../Input'
import { Footer } from '../Footer'

import { Container, Header, Content } from './styles'

export function SideMenu({ menuIsOpen, closeMenu, onSearch }) {
  const { signOut } = useAuth()

  const navigate = useNavigate()

  function handleSearchChange(e) {
    const searchEvent = e.target.value
    onSearch(searchEvent)
  }

  function handleFavorites() {
    navigate('/favorites')
  }

  return(
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <ButtonIcon 
          onClick={closeMenu}
          icon={PiX}
        />
        <h3>Menu</h3>
      </Header>

      <main>
        <Content>
          <Input
            icon={PiMagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
            onChange={handleSearchChange}
          />
          
          <div className="line">
            <a href="#" onClick={handleFavorites}>Meus Favortitos</a>
          </div>

          <div className="line">
            <a href="#" onClick={signOut}>Sair</a>
          </div>
        </Content>
      </main>

      <Footer/>
    </Container>
  )
}