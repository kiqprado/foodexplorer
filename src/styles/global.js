
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-Sizing: 'border-box',
  }

  :root {
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: "Roboto", sans-serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
`
