import styled from 'styled-components'

export const Container = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_100};
  border-radius: .8rem;
  position: relative;

  width: 15rem;
  height: 24rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  > :nth-child(1) {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  > img {
    width: 8.8rem;
    height: 8.8rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

`
