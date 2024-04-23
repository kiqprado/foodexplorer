import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 2rem;
  
  > svg {
    font-size: 2.2rem;
  }
`