import { useState, useEffect } from 'react';
import { api } from '../../services/api'

import { Container, Content, List, CardAd } from './styles'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { DishCard } from '../../components/DishCard'

import CardImg from '../../assets/CardElements.png'

export function Home() {
  const [ categories, setCategories ] = useState([])

  const [favorite, setFavorite] = useState([])

  const [ search, setSearch ] = useState("")
  const [dishesByCategory, setDishesByCategory] = useState({})

  function handleFavoritesList(newFavorite) {
    const alreadyFavorite = favorite.includes(newFavorite)

    if (alreadyFavorite) {
      const filteredFavorite = newFavorite.filter(fav => fav !== newFavorite)
      setFavorite(filteredFavorite)
    }else {
    setFavorite(prevState => [...prevState, newFavorite])
    }
  }

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get("/category")
      setCategories(response.data)
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    async function fetchDishes() {
      const dishesByCategory = {}

      for (const category of categories) {
        const response = await api.get(`/dishes?title=${search}&category_id=${category.id}`)
        dishesByCategory[category.id] = response.data
      }

      setDishesByCategory(dishesByCategory)
    }

    if (categories.length > 0) {
      fetchDishes()
    }
  }, [search, categories])

  return(
    <Container>
      <Header setSearch={setSearch}/>

      <main>
        <Content>
          <CardAd>
            <img src={CardImg} alt="" />
            <div className="about">
              <h3>Sabores inigualáveis</h3>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </CardAd>

          {categories.map(category => (
            <Section key={category.id} title={category.name}>
              {(dishesByCategory[category.id] || []).map(dish => (
                <DishCard
                  key={String(dish.id)}
                  data={dish}
                />
              ))}
            </Section>
          ))}
        </Content>
      </main>
    </Container>
  )
}
