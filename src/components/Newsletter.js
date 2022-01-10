import styled from "styled-components";
import { mobile } from "../responsive";

const Newsletter = () => {
    return (
        <Container>
            <Logo src="/images/logo.png" />
            <Title>Get Started Now</Title>
            <Text>Setup is easy and takes under 5 minutes.</Text>
            <Button>Get Started Now</Button>
            <Users>
                <Circle />
                1000+ <DarkerText>creators have already started</DarkerText>
            </Users>
        </Container>
    )
}

export default Newsletter

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Users = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({
        fontSize: "12px"
    })}
`

const Circle = styled.div`
    width: 10px;
    height: 10px;
    background-color: var(--green);
    outline: 1px solid var(--green);
    border: 1px solid #000;
    border-radius: 50%;
    margin-right: 5px;
`

const DarkerText = styled.span`
    color: var(--gray);
    margin-left: 5px;
`

const Logo = styled.img`
    width: 100px;
    ${mobile({
        width: "70px"
    })}
`

const Title = styled.div`
    margin: 20px 0;
    font-size: 80px;
    font-weight: 700;
    ${mobile({
        fontSize: "40px"
    })}
`

const Text = styled.p`
    font-size: 30px;
    ${mobile({
        fontSize: "20px"
    })}
`

const Button = styled.div`
    padding: 12px 40px;
    background-color: var(--blue);
    border-radius: 10px;
    margin: 20px 0;
    cursor: pointer;
    border: 1px solid var(--blue);
    transition: all 0.2s ease;
    
    &:hover {
        background-color: transparent;
        border: 1px solid var(--blue);
        color: var(--blue);
    }
`
