import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Header } from './Header';

const inAnimation = keyframes`
   0%   {
       transform: translateX(100%)
   }
   40%   {
       transform: translateX(-10%)
   }
   80%   {
       transform: translateX(0%)
   }
   1000%   {
       transform: translateX(-10px)
   }
`;

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  .error-alert {
    position: absolute;
    right: 20px;
    top: 80px;
    background-color: #f88a8a;
    padding: 1em;
    border-radius: 15px;
    color: white;
    animation: ${inAnimation} 1s ease forwards;
  }
  .success-alert {
    position: absolute;
    right: 20px;
    top: 80px;
    background-color: #4db4ff;
    padding: 1em;
    border-radius: 15px;
    color: white;
    animation: ${inAnimation} 1s ease forwards;
  }
  .flex_direction {
    display: flex;
    flex-direction: column;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export { PageLayout };
