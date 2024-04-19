import { Container } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonTxt } from '../../components/ButtonTxt'

export function SignIn() {
  return(
    <Container>
      <Logo/>

      <Input
        title="Email"
        placeholder="Ex@exemplo.com"
        type="email"
      />

      <Input
        title="Senha"
        placeholder="No mínimo 6 caracteres"
        type="password"
      />

      <Button
        title="Entrar"
      />

      <ButtonTxt
        title="Criar uma conta"
      />
      
    </Container>
  )
}