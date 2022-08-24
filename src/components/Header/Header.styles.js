import styled from 'styled-components';

export const Wrapper = styled.div`

`

export const Content = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #2b2b2b;
    color: #d4d4d4;
    padding: .8em;
    h2{
        margin-block-start: 0;
        margin-block-end: 0;
    }
    ul{
        display: flex;
    }
    li{
        margin: 0 3em;
        list-style: none;
    }
    a{
        text-decoration: none;
        color: #d4d4d4;
        font-size: 20px;
    }
`