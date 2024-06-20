import { Container } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { DishCardTemplate } from '../../components/DishCardTemplate'
import { Footer } from '../../components/Footer'

export function Favorites() {
  return(
    <Container>
      <Header/>

      <main>
      <Section
        title="Meus Favoritos"
      >
        <DishCardTemplate/>
        <DishCardTemplate/>
        <DishCardTemplate/>
        <DishCardTemplate/>

      </Section>
      </main>

      <Footer/>
      
    </Container>
  )
}