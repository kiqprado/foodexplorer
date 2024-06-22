import styled from 'styled-components'

export const Container = styled.aside`
  display: grid;
  grid-template-rows: 10rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  width: 100%;
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 2;
  display: none;

  main {
    padding: 3.6rem 2.8rem;
    grid-area: content;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    h4 {
      margin-left: 1.2rem;
    }

    button {
      margin: 4.4rem 0 0 16rem;
      width: 50%;
    }
  }

  &[data-order-is-open='true'] {
    display: block;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 4.4rem 2.4rem 2rem;
  position: relative;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  a {
    margin-left: 9rem;
  }

  button {
    position: absolute;
    top: 4.6rem;
    right: 2.4rem;
  }
`