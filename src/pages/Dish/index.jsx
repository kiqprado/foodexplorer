import { Link } from 'react-router-dom'

import { Container } from './stytles'
import dish from '../../assets/dish.png'
import { Header } from '../../components/Header'

export function Dish({data}) {
  return(
    <Container>
      <Header/>

      <main>
        
        <Link to="/">
          &lt; voltar
        </Link>

        <img src={dish} alt="" />

        <h1>{data.title}</h1>

        <p>{data.description}</p>
        {
          data.tags &&
          <div>
              {
                data.tags.map(tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
              }
          </div>
        }
      </main>
      
    </Container>

  )
}