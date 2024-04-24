import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 17rem;
  padding: 1.4rem;
  
  border: none;
  border-radius: 0.8rem;
  resize: none;
  outline: none;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
`
