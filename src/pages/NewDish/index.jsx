import { Link } from 'react-router-dom'

import { Container, Form, StuffTags } from './styles'

import { Header } from '../../components/Header'

import { Input } from '../../components/Input'
import { InputImg } from '../../components/InputImg'
import { InputLabel } from '../../components/InputLabel'
import { DishStuff } from '../../components/DishStuff'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'

export function NewDish() {
  return(
    <Container>
      <Header/>
      <main> 
        <Link to="/">
          &lt; voltar
        </Link> 
        <Form>  

          <h2>Novo Prato</h2>

          <div className="inputs">
          <InputLabel
            title="Imagem do prato"
            htmlFor="dishName"
          />
          <InputImg
            title="Selecione a imagem"
          />
          </div>

          <div className="inputs">
          <InputLabel
            title="Nome"
            htmlFor="dishName"
          />
          <Input
            id="dishName"
            type="text"
            placeholder="Ex: Salada Ceasar"
          />
          </div>

          <div className="inputs">
          <InputLabel
            title="Categoria"
            htmlFor="dishCategory"
          />
          <Input
            id="dishCategory"
            type="text"
            placeholder="Ex: Salada Ceasar"
          />
          </div>

          <div className="inputs">
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
          </div>

          <div className="inputs">
          <InputLabel
            title="Preço"
            htmlFor="dishPrice"
          />
          <Input
            id="dishPrice"
            type="number"
            placeholder="R$: 49,90"
          />
          </div>

          <div className="inputs">
          <InputLabel
            title="Descrição"
            htmlFor="dishDescription"
          />
          <Textarea
            id="dishDescription"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição..."
          />
          </div>

          <Button
            title="Salvar alterações"
          />
      </Form>
      </main>
      
    </Container>
  )
}