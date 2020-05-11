import styled from 'styled-components';

const Input = styled.input`
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    &:focus{
        outline: none;
        border: 1px solid #3c3c3c;
    }
`;
export { Input } ;