import { Link } from 'react-router-dom'

import { Container, Form } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { InputLabel } from '../../components/InputLabel'
import { Button } from '../../components/Button'
import { ButtonTxt } from '../../components/ButtonTxt'

export function SignUp() {
  return(
    <Container>
      <Form>
        <Logo/>

        <InputLabel
          title="Seu nome"
          htmlFor="nameInput"
        />
        <Input
          id="nameInput"
          placeholder="Ex: Socorro Jesus"
          type="text"
        />

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
          title="Criar conta"
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}