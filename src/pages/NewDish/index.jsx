import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { Container, Form, StuffTags } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { InputImg } from '../../components/InputImg'
import { InputLabel } from '../../components/InputLabel'
import { DishStuff } from '../../components/DishStuff'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'

export function NewDish() {
  const [ avatar, setAvatar] = useState(null)

  const [ title, setTitle ] = useState("")
  const [ category, setCategory ] = useState("")

  const [ ingredients, setIngredients ] = useState([])
  const [ newIngredient, setNewIngredient ] = useState("")

  const [ price, setPrice ] = useState("")
  const [ description, setDescription ] = useState("")

  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

async function handleNewDish() {
  if(!title) {
    alert("Os Pratos devem possuir um Nome para serem adicionados ao catalogo.")
  }
  if(!category) {
    alert("A categoria do produto deve ser informada!")
  }
  if(newIngredient) {
    alert("Existe um ingrediente no campo preenchido mas não adicionado a lista, adicione ou exclua o mesmo.")
  }
  if(!price) {
    alert("Informe o valor do seu Prato.")
  }

  await api.post("/dishes", {
    avatar,
    title,
    name: category,
    ingredients,
    price,
    description
  })

  
  alert("Prato cadastrado com sucesso!")
  navigate('/')
}

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
            htmlFor="dishTitle"
          />
          <Input
            id="dishTitle"
            type="text"
            placeholder="Ex: Salada Ceasar"
            onChange={e => setTitle(e.target.value)}
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
            onChange={e => setCategory(e.target.value)}
          />
          </div>

          <div className="inputs">
          <InputLabel
            title="Ingredientes"
          />
          <StuffTags>
            {
              ingredients.map((ingredient, index) => (
                <DishStuff
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))
            }

            <DishStuff
              isNew
              placeholder="Ain Zé da MANGA"
              value={newIngredient}
              onChange={e => setNewIngredient(e.target.value)}
              onClick={handleAddIngredient}
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
            onChange={e => setPrice(e.target.value)}
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
            onChange={e => setDescription(e.target.value)}
          />
          </div>

          <Button
            title="Salvar alterações"
            onClick={handleNewDish}
          />
      </Form>
      </main>
      
    </Container>
  )
}