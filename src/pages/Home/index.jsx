import { Container, List } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
export function Home() {
  return(
    <Container>
      <Header/>

      <Section
        title="Refeições"
      >

      </Section>

      <Section
        title="Pratos principais"
      >

      </Section>

      <Section
        title="Acompanhamentos"
      >

      </Section>
    </Container>
  )
}
