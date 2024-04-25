import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin-bottom: 4.8rem;
  
  > label {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;

    cursor: pointer;
    font-size: 1.4rem;

    padding: 1.2rem 1.4rem;

    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    input {
      display: none;
    }

    svg {
      font-size: 2.4rem;
      margin: 0 0.8rem;
    }
  }
`
