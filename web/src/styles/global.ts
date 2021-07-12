import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
