import { useLocation } from 'react-router-dom'

import { PiX } from 'react-icons/pi'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { DishCardTemplate } from '../../components/DishCardTemplate'
import { Button } from '../../components/Button'

import { Container } from './styles'

export function Order() {
  const location = useLocation()
  const { itemCount, orderItems } = location.state || { itemCount: 0, orderItems: [] }

  return(
    <Container>
      <Header
        itemCount={itemCount} 
      />

      <main>
      
      <Section
        title="Meu Pedido"
      >
         {orderItems.map((item, index) => (
            <DishCardTemplate key={index} data={item} onOrder />
          ))}

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