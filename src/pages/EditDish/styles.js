import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Form = styled.form`
  input,
  textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`

export const StuffTags = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
`

export const Edit = styled.div`
  display: flex;
  gap: 3.2rem;

  > button:first-child {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`