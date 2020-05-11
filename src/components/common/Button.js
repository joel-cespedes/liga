import styled, { css } from 'styled-components';

const Button = styled.button`
  color: white;
  background: ${ (p) => p.secondary ? p.theme.secondaryColor : p.theme.primaryColor };
  cursor: ${(p) => (p.cursor ? 'pointer' : 'normal')};
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  cursor: pointer;
  transition: all 0.3s;
  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
  &:focus {
    outline: none;
    border: ${(p) => (p.cursor ? 'none' : '1px solid #3c3c3c')};
  }
  &:disabled {
    background: #eee;
    color: #666;
  }
  &:hover {
    opacity: 0.7;
  }
`;

export { Button };
