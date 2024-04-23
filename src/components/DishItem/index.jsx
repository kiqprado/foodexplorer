import { Container, ButtonBack } from './styles'

export function Dish({data, ...rest}) {
  return(
    <Container {...rest}>
      <ButtonBack/>

      <img src={data.image} alt="" />

      <h2>{data.title}</h2>

      <p>{data.description}</p>

      {
        data.tags &&
        <div>
          {
            data.tags.map(tag => 
              <Tag
                key={tag.name}
                title={tag.name}
              />
            )
          }
        </div>
      }
    
    </Container>
  )
}