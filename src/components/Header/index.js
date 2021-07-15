import { Container, Box, Logo, Text, Wrapper, Saldo } from './styles'

const Header = () => {
    return (
        <Container>
            <Wrapper>
            <Box>
                <Logo src="https://github.com/alexandrevelozo.png" alt="Babu System" />
                <div>
                    <Text>Babu Cred System</Text>
                    <p>O Pai ta on LTDA.</p>
                </div>
            </Box>
            <Saldo>
                <span>Sócio Nominal: Abel das Entrega</span>
                <span>Saldo: R$ 19,75</span>
            </Saldo>
            </Wrapper>
        </Container>
    )
}

export default Header