import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');

  body {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
`;

export default GlobalStyle;
