import styled from 'styled-components'
import { Swiper as ReactSwiper } from 'swiper/react'

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 10rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`

export const Content = styled.div`
  padding: 0 2.4rem 2.4rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const CardAd = styled.div`
  display: flex;
  margin: 4.4rem 1.6rem 6.2rem;
  padding: 3rem 2rem 2rem 0;

  border-radius: 0.3rem;

  position: relative;

  > img {
    height: 14.3rem;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: -2.4rem;
  }

  .about {
    display: flex;
    flex-direction: column;
    margin-left: 15rem;
    gap: 0.6rem;

    h3 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background: linear-gradient(
    360deg,
    rgba(0, 16, 16, 1) 0%,
    rgba(6, 23, 30, 1) 50%,
    rgba(8, 24, 30, 1) 100%
  );
`

export const CustomSwiper = styled(ReactSwiper)`
  width: 100%;

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 30rem;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }

    .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
    }

    .swiper-3d .swiper-slide-shadow-right {
      background-image: none;
    }
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`
