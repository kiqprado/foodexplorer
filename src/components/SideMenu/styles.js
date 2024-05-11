import styled from 'styled-components'

export const Container = styled.aside`
  position: absolute;
  z-index: 1;

  display: none;

  &[data-menu-is-open='true'] {
    display: block;
  }
`

export const Header = styled.header``
