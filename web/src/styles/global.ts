import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

html {
  font-size: 62.5%;
}

html,
body {
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  text-rendering: optimizelegibility;
  background-color: #FFFCF9;
  -webkit-font-smoothing: antialiased;
}

body {
  font-size: 1.6rem;
}

button {
  cursor: pointer;
}

@media (max-width: 768px) {
  html {
    font-size: 50%;
  }
}
`;
