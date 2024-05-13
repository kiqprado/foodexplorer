import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  position: relative;

  display: flex;
  justify-content: space-between;
  padding: 3.6rem 2.4rem 2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`
