import { PiX } from 'react-icons/pi'

import { ButtonIcon } from '../ButtonIcon'
import { Container, Header } from './styles'

export function SideMenu({ menuIsOpen}) {
  return(
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <ButtonIcon
          icon={PiX}
        />
        <h3>Menu</h3>
      </Header>
    </Container>
  )
}