// src/Global.style.ts

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    background-color: #333;
    line-height: 1.6;
    display: flex;
    justify-content: center;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    font-size: 2rem;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  // Дополнительные стили можно добавлять здесь
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }


`;
