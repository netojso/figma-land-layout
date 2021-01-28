import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    background: #181818;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;
