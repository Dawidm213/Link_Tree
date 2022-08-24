import styled from "styled-components";

export const Base = styled.div`
    width: 100%;
    background: #232323;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = styled.div`
    background: orange;
    text-align: center;
    font-size: 2rem;
    padding: .5rem 1rem;
    border-radius: 1rem;
    font-weight: bold;
    a{
        text-decoration: none;
        color: #1a1a1a;
    }
    :hover{
        cursor: pointer;
        background: #ffb733;
    }
`