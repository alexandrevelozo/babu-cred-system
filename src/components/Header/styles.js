import styled from 'styled-components'

export const Container = styled.div`
    background: #F7EEFF;
`

export const Box = styled.div`
    display: flex;
    align-items: center;

    div {
        padding-left: 10px;

        p {
            padding-top: 5px;
            color: #7572FD;
        }
    }
`

export const Logo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #7572FD;
`

export const Text = styled.span`
    font-size: 30px;
    color: #7572FD;
    font-weight: bold;
`

export const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Saldo = styled.div`
    display: flex;
    flex-direction: column;
    

    span {
        color: #7572FD;
        font-size: 18px;
        font-weight: bold;
    }
`
