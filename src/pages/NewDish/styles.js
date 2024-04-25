import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    padding: 0 3.2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > h2 {
    margin-top: 2.4rem;
  }

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
  border-radius: 0.8rem;
  
  padding: 1rem 0 1rem 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
`
