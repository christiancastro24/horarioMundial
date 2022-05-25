import styled from "styled-components"

export const Container = styled.div `
    width: 17%;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 25px;
    box-shadow: 0.5px 0.5px 1.5px 2px black; 

    h1 {
        font-size: 2rem;
    }
`

export const Content = styled.div `
    display: flex;

    h2 {
        text-align: left;
        margin-left: 15px;
        font-weight: 100px;
    }

    img {
        height: 42px;
        width: 42px;
        margin-left: auto;
        margin-top: 13px;
        margin-right: 25px;
    }
`