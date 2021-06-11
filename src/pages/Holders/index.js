import DenseTable from '../../components/DenseTable'
import Header from '../../components/Header'
import Menu from '../../components/Menu'

import { Container } from './styles'

const Holders = () => {
    return (
        <>
            <Header />
            <Menu />
                <Container>
                    <DenseTable />
                </Container>
        </>
        
    )
}

export default Holders;