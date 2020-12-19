import styled, { createGlobalStyle } from 'styled-components';

import {
  primaryColor,
  primaryDarkColor,
  successColor,
  erroColor,
} from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${primaryDarkColor};
    color: ${primaryColor};
  }


  button {
    cursor: pointer;
    background: ${primaryColor};
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }

  ul {
    list-style: none;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background-color: ${successColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background-color: ${erroColor};
  }
`;

export const Container = styled.section`
  max-width: 400px;
  background-color: white;
  margin: 30px auto;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
