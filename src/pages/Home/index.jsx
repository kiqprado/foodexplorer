import { useState, useEffect } from 'react';
import { api } from '../../services/api'

import {  SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { Container, Content, CardAd, CustomSwiper  } from './styles'
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
      <CardAd>
            <img src={CardImg} alt="" />
            <div className="about">
              <h3>Sabores inigualáveis</h3>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </CardAd>
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
                    />
                  </SwiperSlide>
                ))}
              </CustomSwiper>
            </Section>
          ))}
        </Content>
      </main>
    </Container>
  )
}
