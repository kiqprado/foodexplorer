
import { Container, Select } from './styles'

export function InputSelect({ icon: Icon }) {
  return(
    <Container>
      {Icon && <Icon size={24}/>}
      <Select>
        <option value="meals">Refeições</option>
        <option value="dishes">Pratos principais</option>
        <option value="assistance">Acompanhamentos</option>
        <option value="desserts">Sobremesas</option>
      </Select>
    </Container>

  )
}