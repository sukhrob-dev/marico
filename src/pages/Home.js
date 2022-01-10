import styled from "styled-components"
import Header from '../components/Header';
import Marico from '../components/Marico';
import Main from '../components/Main';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <Container>
            <Header />
            <Marico />
            <Main />
            <Newsletter />
        </Container>
    )
}

export default Home

const Container = styled.div``;