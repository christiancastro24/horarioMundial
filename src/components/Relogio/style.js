import styled from "styled-components"

export const Container = styled.div `
    padding: 2px 30px;
    width: 40%;
    margin: 3% auto;

    h1 {
        font-size: 2rem;
        margin-top
        white-space: nowrap;
        text-align: center;
        letter-spacing: 2px;
        font-family: 'Oxanium', cursive;   
    }

    h2 {
        text-align: center;
    }
`

export const Cidade = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -2rem;
    margin-right: 1rem;

    span {
        display: block;
        font-size: 24px;
        margin-top: 0.4rem;
        line-height: 5rem;
        margin-left: 10px;
        font-family: 'Roboto', sans-serif;
    }

`

export const DataAtual = styled.div `
    text-align: center;

    h1 {
        font-size: 4.5rem;
    }
`