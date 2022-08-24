import styled from 'styled-components';

export const Image = styled.div`
    img{
        width: 175px;
        height: 175px;
        border-radius: 1.5rem;
    }
    img:hover{
        transform: scale(1.1);
        transition-duration: 0.3s;
    }
    

`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 1rem .5rem;
    border: 1px solid;
    float: left;
    border-radius: 1.5rem;
    height: 265px;
`
export const Header = styled.div`
    font-size: 1.3rem;
    margin-bottom: .3rem;
    max-width: 185px;
    text-align: center;
`
export const Link = styled.a`
    margin: 1rem .6rem;
`