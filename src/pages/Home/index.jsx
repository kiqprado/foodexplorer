import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api'

import { SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { Container, Content, CustomSwiper  } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CardsAD } from '../../components/CardsAD'
import { Section } from '../../components/Section'
import { DishCard } from '../../components/DishCard'

export function Home() {
  const [categories, setCategories] = useState([])

  const [favorite, setFavorite] = useState([])

  const [ search, setSearch ] = useState("")
  const [dishesByCategory, setDishesByCategory] = useState({})

  const navigate = useNavigate()

  /*function handleFavoritesList(newFavorite) {
    const alreadyFavorite = favorite.includes(newFavorite)

    if (alreadyFavorite) {
      const filteredFavorite = newFavorite.filter(fav => fav !== newFavorite)
      setFavorite(filteredFavorite)
    }else {
    setFavorite(prevState => [...prevState, newFavorite])
    }
  }*/

  function handleDetails(id) {
    navigate(`/details/${id}`)
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
        <CardsAD/>
            
        <Content>
          
          {categories.map(category => (
            <Section key={category.id} title={category.name}>
              <CustomSwiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={-16}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Navigation]}
              >
                {(dishesByCategory[category.id] || []).map(dish => (
                  <SwiperSlide key={dish.id}>
                    <DishCard
                      key={String(dish.id)}
                      data={dish}
                      onClick={() => handleDetails(dish.id)}
                    />
                  </SwiperSlide>
                ))}
              </CustomSwiper>
            </Section>
          ))}
        </Content>
      </main>

      <Footer/>
    </Container>
  )
}
