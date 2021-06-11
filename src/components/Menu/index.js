import { Link } from 'react-router-dom';
import { Container, Box } from './styles'

const Menu = () => {
    return (
        <Container>
            <Box>
                <Link to="/">Inicio</Link>
                <Link to="/acionistas">Acionistas</Link>
                <Link to="/reports">Relatórios</Link>
                <Link>Contato</Link>
                <Link>Sobre Nós</Link>
            </Box>
        </Container>
    )
}

export default Menu;