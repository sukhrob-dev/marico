import styled from "styled-components";
import { mobile } from "../responsive";

const Marico = () => {
    return (
        <Container>
            <Title>why creators love marico?</Title>
            <AboutContainer>
                <Item>
                    <ItemTitle>Reduced Anxiety</ItemTitle>
                    <ItemText>Never worry about losing your audience.</ItemText>
                </Item>
                <Item>
                    <ItemTitle>Lower Workload</ItemTitle>
                    <ItemText>Just share one link. We'll handle the rest.</ItemText>
                </Item>
                <Item>
                    <ItemTitle>More Time</ItemTitle>
                    <ItemText>Spend less time on marketing tools.</ItemText>
                </Item>
            </AboutContainer>
        </Container>
    )
}

export default Marico

const Container = styled.div`
    text-align: center;
`

const Title = styled.h2`
    font-size: 70px;
    text-transform: capitalize;
    font-weight: 400;
    margin: 60px 0;
    ${mobile({
        fontSize: "40px"
    })}
`

const AboutContainer = styled.div`
    display: flex;
    justify-content: space-around;
    ${mobile({
        flexDirection: "column"
    })}
`

const Item = styled.div``

const ItemTitle = styled.p`
    font-size: 30px;
    ${mobile({
        fontSize: "24px"
    })}
`

const ItemText = styled.p`
    color: var(--gray);
    ${mobile({
        fontSize: "14px"
    })}
`