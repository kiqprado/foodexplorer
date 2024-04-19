import { Container } from './styles'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonTxt } from '../../components/ButtonTxt'

export function SignUp() {
  return(
    <Container>
      <Logo/>

      <Input
        title="Seu nome"
        type="text"
        placeholder="Ex: Maria da Silva"
      />

      <Input
        title="Email"
        type="email"
        placeholder="Ex@exemplo.com"
      />

      <Input
        title="Senha"
        type="password"
        placeholder="No mínimo 6 caracteres"
      />

      <Button
        title="Criar conta"
      />

      <ButtonTxt
        title="Já tenho uma conta"
      />
      
    </Container>
  )
}