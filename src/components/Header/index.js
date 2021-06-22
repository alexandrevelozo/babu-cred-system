import { Container, Box, Logo, Text, Wrapper, Saldo } from './styles'

const Header = () => {
    return (
        <Container>
            <Wrapper>
            <Box>
                <Logo src="https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/172899589_800578617241053_7249744988511919340_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=RqnNYYawQg8AX93rzPK&_nc_ht=scontent-gru1-1.xx&oh=8633f0b3e43f2db66e9d71b99872f9ea&oe=60D98260" alt="Babu System" />
                <div>
                    <Text>Babu Cred System</Text>
                    <p>O Pai ta on LTDA.</p>
                </div>
            </Box>
            <Saldo>
                <span>Sócio Nominal: Abel das Entrega</span>
                <span>Saldo: R$ 19,70</span>
            </Saldo>
            </Wrapper>
        </Container>
    )
}

export default Header