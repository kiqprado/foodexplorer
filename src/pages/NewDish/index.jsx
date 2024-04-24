import { Link } from 'react-router-dom'

import { PiUploadSimple } from 'react-icons/pi'
import { Container, Form, StuffTags } from './styles'

import { Header } from '../../components/Header'

import { Input } from '../../components/Input'
import { InputLabel } from '../../components/InputLabel'
import { DishStuff } from '../../components/DishStuff'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'

export function NewDish() {
  return(
    <Container>
      <Header/>
      <main>  
      <Form>
        <Link to="/">
          &lt; voltar
        </Link>

        <h2>Novo Prato</h2>

        <InputLabel
          title="Imagem do Prato"
          htmlFor="chooseFile"
        />
        <Input
          id="chooseFile"
          type="file"
          icon={PiUploadSimple}
          placeholder="Selecionar imagem"
        />

        <InputLabel
          title="Nome"
          htmlFor="dishName"
        />
        <Input
          id="dishName"
          type="text"
          placeholder="Ex: Salada Ceasar"
        />

        <InputLabel
          title="Categoria"
          htmlFor="dishCategory"
        />
        <Input
          id="dishCategory"
          type="text"
          placeholder="Ex: Salada Ceasar"
        />

        <InputLabel
          title="Ingredientes"
        />
        <StuffTags>
          <DishStuff
            value="Sal"
          />

          <DishStuff
            isNew
            placeholder="Ain Zé da MANGA"
          />
        </StuffTags>

        <InputLabel
          title="Preço"
          htmlFor="dishPrice"
        />
        <Input
          id="dishPrice"
          type="number"
          placeholder="R$: 49,90"
        />

        <InputLabel
          title="Descrição"
          htmlFor="dishDescription"
        />
        <Textarea
          id="dishDescription"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição..."
        />

        <Button
          title="Salvar alterações"
        />
      </Form>
      </main>
      
    </Container>
  )
}