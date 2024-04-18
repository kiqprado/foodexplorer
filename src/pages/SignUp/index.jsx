import { Container, Field } from './styles'
import { Title } from '../../components/Title'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonTxt } from '../../components/ButtonTxt'

export function SignIn() {
  return(
    <Container>
      <Title/>

      <Field>
        <Input/>
      </Field>

      <Field>
        <Input/>
      </Field>

      <Field>
        <Input/>
      </Field>

      <Button/>

      <ButtonTxt/>
      
    </Container>
  )
}