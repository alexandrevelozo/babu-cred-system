import { useHistory } from 'react-router-dom'
import { Container, Box } from './styles'

import Header from '../../../components/Header'
import Menu from '../../../components/Menu'

const CreateAccount = () => {
    const history = useHistory()

    function navigate() {
        history.push('/succeded')
    }
    return (
        <>
            <Header />
            <Menu />
            <Container>
                <Box>
                    <span>Seja um Babu Cred</span>
                    <div>
                        <span>
                            Nome Completo:
                        </span>
                        <input placeholder="Insira o nome" />
                    </div>
                    <div>
                        <span>
                            CPF
                        </span>
                        <input placeholder="Insira o cpf" />
                    </div>
                    <div>
                        <span>
                            Data de Nascimento
                        </span>
                        <input type="date" placeholder="Insira a data de nascimento" />
                    </div>
                    <div>
                        <span>
                            Número de Telefone
                        </span>
                        <input placeholder="Insira seu número" />
                    </div>
                    <div>
                        <button onClick={navigate}>Cadastrar babusada</button>
                    </div>
                </Box>
            </Container>
        </>
    )
}

export default CreateAccount