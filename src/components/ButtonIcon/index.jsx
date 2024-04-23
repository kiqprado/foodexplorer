import { Container } from './styles'

export function ButtonIcon({ icon : Icon, ...rest }) {
  return(
    <Container {...rest}>
      {Icon && <Icon size={24}/>}
    </Container>
  )
}