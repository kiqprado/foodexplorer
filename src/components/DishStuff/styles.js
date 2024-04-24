import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin: 1rem 0 1rem 1.6rem;

  border-radius: 0.8rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT_600};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  > button {
    border: none;
    background: none;
  }

  .btn-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  .btn-del {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > input {
    width: 100%;
    padding: 1.2rem;

    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
