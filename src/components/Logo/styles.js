import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  ${({ size }) =>
    size &&
    `
      img {
        width: ${size}px;
        height: ${size}px;
      }

      h1 {
        font-size: ${size}px;
      }
    `}
`
