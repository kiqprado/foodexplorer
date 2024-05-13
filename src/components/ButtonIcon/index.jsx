import { Container } from './styles'

export function ButtonIcon({ icon : Icon, onClick, ...rest }) {
  return(
    <Container 
      type="button"
      onClick={onClick}
      {...rest}
    >
      {Icon && <Icon size={24}/>}
    </Container>
  )
}