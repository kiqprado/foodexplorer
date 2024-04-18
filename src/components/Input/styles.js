import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  input {
    padding: 1.2rem 1.4rem;

    border: none;
    border-radius: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    &::placeholder {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
