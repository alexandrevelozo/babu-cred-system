import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    span {
        color: #7572FD;
        font-size: 28px;
        font-weight: 500;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        padding-left: 10px;
    }
`

const CompletedAccount = () => {
    return (
        <Container>
            <span>Em breve te retornaremos com uma resposta do babu...</span>
            <img src="https://github.com/alexandrevelozo.png" alt="Babu System" />
        </Container>
    )
}

export default CompletedAccount;