import { createGlobalStyle } from "styled-components";
import "react-perfect-scrollbar/dist/css/styles.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  #root {
    font-family: 'Roboto', sans-serif;
    background: #f1f1f1;
  }
  button {
    cursor: pointer;
  }
`;
