import { Link } from 'react-router-dom'

import { Container, Form } from './styles'
import { Logo } from '../../components/Logo'
import { InputLabel } from '../../components/InputLabel'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return(
    <Container>
      <Form>
        <Logo/>

        <InputLabel
          title="Email"
          htmlFor="emailInput"
        />
        <Input
          id="emailInput"
          placeholder="Ex@exemplo.com"
          type="email"
        />

        <InputLabel
          title="Senha"
          htmlFor="passwordInput"
        />
        <Input
          id="passwordInput"
          placeholder="No mínimo 6 caracteres"
          type="password"
        />

        <Button
          title="Entrar"
        />

        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>
    </Container>
  )
}