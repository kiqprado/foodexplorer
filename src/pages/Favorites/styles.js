import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  main {
    padding: 3.6rem 2.8rem;
    grid-area: content;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    h4 {
      margin-left: 1.2rem;
    }

  }
`