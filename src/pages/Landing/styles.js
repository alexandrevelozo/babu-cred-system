import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    margin: 0 auto;
    width: 100%;
`

export const Box = styled.div`
    max-width: 400px;

    span {
        font-size: 50px;
        color: #7572FD;
    }

    img {
        width: 350px;
        height: 350px;
    }

    p {
        margin-top: 10px;
        font-size: 16px;
        color: #2F2E41;
    }

    button {
        margin-top: 10px;
        padding: 18px;
        border: 0;
        background: #2F2E41;
        border-radius: 8px;
        color: #fff;
        width: 100%;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
    }
`