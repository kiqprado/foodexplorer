import { Container } from './styles'

export function InputLabel({ title, ...rest}) {
  return(
    <Container {...rest}>
      {title}
    </Container>

  )
}