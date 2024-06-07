import styled from 'styled-components'

export const Container = styled.div``

export const Card = styled.div`
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
