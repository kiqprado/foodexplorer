
import { ButtonIcon } from '../ButtonIcon'
import { Logo } from '../Logo'
import { Section } from '../Section'
import { DishCardTemplate } from '../DishCardTemplate'
import { Button } from '../Button'
import { Footer } from '../Footer'

import { PiX } from 'react-icons/pi'

import { Container, Header } from './styles'

export function OrderClient({ orderIsOpen, closeOrder }) {
 return(
  <Container data-order-is-open={orderIsOpen}>
    <Header>
      <Logo
        size={22}
      />
      
      <ButtonIcon
        onClick={closeOrder}
        icon={PiX}
      />
    </Header>

    <main>
      <Section
        title="Meu Pedido"
      >
        <DishCardTemplate
          onOrder
        />
        <DishCardTemplate
          onOrder
        />
        <DishCardTemplate/>
        <DishCardTemplate/>
        <DishCardTemplate/>
        <DishCardTemplate/>

        <h4>Total: R$ 103,34</h4>
      </Section>

      <Button
        title="Avançar"
      />
    </main>

    <Footer/>
  </Container>
 )
}