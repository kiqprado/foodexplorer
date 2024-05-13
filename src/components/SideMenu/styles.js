import styled from 'styled-components'

export const Container = styled.aside`
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 2;
  display: none;

  main {
    padding: 3.6rem 2.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }

  &[data-menu-is-open='true'] {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`

export const Header = styled.header`
  display: flex;
  width: 100%;
  gap: 1.6rem;
  padding: 4.4rem 2.4rem 2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`

export const Content = styled.div`
  width: 100%;
`
