import Header from '../../components/Header'
import Menu from '../../components/Menu'
import SimpleLineChart from '../../components/SimpleLineChart'

import { Container } from './styles'

const Reports = () => {
    return (
        <>
            <Header />
            <Menu />
                <Container>
                    <SimpleLineChart />
                </Container>
        </>
    )
}

export default Reports