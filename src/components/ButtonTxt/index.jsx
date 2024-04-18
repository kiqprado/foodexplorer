import { Container } from './styles'

export function ButtonTxt({title, isActive = false, ...rest}) {
  return(
    <Container 
      type="button"
      $isactive={isActive}
      {...rest}
    >
      {title}
    </Container>
  )
}