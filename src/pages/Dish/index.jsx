import { api } from '../../services/api'
import { Link } from 'react-router-dom'

import { Container } from './stytles'
import { Header } from '../../components/Header'

import dishPlaceholder from '../../assets/dishPlaceholder.svg'

export function Dish({ data, ...rest}) {
  const dishAvatar = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : dishPlaceholder

  return(
    <Container {...rest}>
      <Header/>

      <main>
        
        <Link to="/">
          &lt; voltar
        </Link>

        <img src={dishAvatar} alt={data.title} />

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