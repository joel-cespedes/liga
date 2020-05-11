import styled, {keyframes} from 'styled-components';

const ItemUser = styled.li`
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: .5em 1em;

    align-items:center;
    border: 1px solid #e1e1e1;
    border-radius: 13px;
    margin: .2em 0;
    transition: all .4s;
    &:hover {
        box-shadow: 0 0 10px #acacac;
    }
    .item_left{
        align-items:center;
        flex-direction: column;
        display:flex;
        cursor: pointer;
    }
    .detatil{
        display: flex; 
    }
    Button {
        margin-left: .5em;
    }
    .avatar{
        width:60px
    }
    img{
        width: 100%;
        border-radius: 30px;
    }
`
export {ItemUser};