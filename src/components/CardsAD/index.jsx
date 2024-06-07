import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

import { Container, Card } from './styles'

import CardImg from '../../assets/CardElements.png'

export function CardsAD() {

  const cards = [
    {
      title: 'Sabores inigualáveis',
      description: 'Sinta o cuidado do preparo com ingredientes selecionados.',
      img: CardImg,
    },
    {
      title: 'Sabores inigualáveis',
      description: 'Sinta o cuidado do preparo com ingredientes selecionados.',
      img: CardImg,
    },
    {
      title: 'Sabores inigualáveis',
      description: 'Sinta o cuidado do preparo com ingredientes selecionados.',
      img: CardImg,
    },
    {
      title: 'Sabores inigualáveis',
      description: 'Sinta o cuidado do preparo com ingredientes selecionados.',
      img: CardImg,
    },
  ]

  return(
    <Container>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card>
              <img src={card.img} alt="" />
              <div className="about">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </Container>
  )
} 