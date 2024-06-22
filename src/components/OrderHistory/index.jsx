

import { ButtonIcon } from '../ButtonIcon'
import { Logo } from '../Logo'
import { Section } from '../Section'
import { Footer } from '../Footer'

import { PiX } from 'react-icons/pi'

import { Container, Header } from './styles'

export function OrderHistory({ historyIsOpen, closeHistory }) {
  return(
    <Container data-history-is-open={historyIsOpen}>
      <Header>
        <Logo size={22} />
        
        <ButtonIcon onClick={closeHistory} icon={PiX} />
      </Header>

      <main>
        <Section title="Histórico de Pedidos">
          {/* Aqui você pode mapear e renderizar os pedidos históricos */}
        </Section>
      </main>

      <Footer />
    </Container>
  )
}