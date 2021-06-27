import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 20px;

    > span {
        font-size: 30px;
        color: #7572FD;
        font-weight: bold;
        margin-bottom: 18px;
    }

    div {
        display: flex;
        flex-direction: column;

        margin-top: 10px;

        span {
            margin-bottom: 5px;
            color: #7572FD;
        }

        input {
            padding: 10px;
            width: 400px;
            border: 2px solid #a695fb;
            border-radius: 8px;
        }
         
        button {
            margin-top: 10px;
            padding: 14px;
            border: 0;
            background: #2F2E41;
            border-radius: 8px;
            color: #fff;
            width: 240px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
        }
    }
`