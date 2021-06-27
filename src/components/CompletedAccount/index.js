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
            <img src="https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/172899589_800578617241053_7249744988511919340_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=RqnNYYawQg8AX93rzPK&_nc_ht=scontent-gru1-1.xx&oh=8633f0b3e43f2db66e9d71b99872f9ea&oe=60D98260" alt="Babu System" />
        </Container>
    )
}

export default CompletedAccount;