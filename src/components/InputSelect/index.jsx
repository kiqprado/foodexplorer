
import { Container, Select } from './styles'

export function InputSelect({ icon: Icon, onChange }) {
  return(
    <Container>
      {Icon && <Icon size={24}/>}
      <Select onChange={onChange}>
        <option value="Refeições">Refeições</option>
        <option value="Pratos principais">Pratos principais</option>
        <option value="Acompanhamentos">Acompanhamentos</option>
        <option value="Sobremesas">Sobremesas</option>
      </Select>
    </Container>

  )
}