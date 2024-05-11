import { Container, Content, List, CardAd } from './styles'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { DishCard } from '../../components/DishCard'

import CardImg from '../../assets/CardElements.png'

export function Home() {

  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <CardAd>
            <img src={CardImg} alt="" />
            <div className="about">
              <h3>Sabores inigualáveis</h3>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </CardAd>

          <Section
            title="Refeições"
          >
            <List>
              <DishCard/>
              <DishCard/>
            </List>
          </Section>

          <Section
            title="Pratos principais"
          >
            <List>
              <DishCard/>
              <DishCard/>
            </List>
          </Section>

          <Section
            title="Acompanhamentos"
          >
            <List>
              <DishCard/>
              <DishCard/>
            </List>
          </Section>
        </Content>
      </main>
    </Container>
  )
}
