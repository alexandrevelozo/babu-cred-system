import { useHistory } from 'react-router-dom'

import Header from '../../components/Header'
import Menu from '../../components/Menu'

import ImageInvesting from '../../assets/investing.svg'

import { Container, Box } from './styles'

const Landing = () => {
    const history = useHistory()

    function navigateCreateAccount() {
        history.push('/createaccount')
    }

    return (
        <>
            <Header />
            <Menu />
            <Container>
                    <Box>
                        <span>Abra sua conta <br />gratuita</span>
                        <p>Menos taxas, menos burocracia e você ainda tem acesso a uma plataforma com vários serviços para o seu dia a dia.</p>
                        <button onClick={navigateCreateAccount}>Abra sua conta</button>
                    </Box>
                    <Box>
                        <img src={ImageInvesting} alt="Investir" />
                    </Box>
            </Container>
        </>
    )
}

export default Landing