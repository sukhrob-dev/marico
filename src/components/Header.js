import styled from "styled-components";
import { mobile } from "../responsive";

const Header = () => {
    return (
        <Container>
            <Title>
                Own your audience.
                <GradientText>So you don't lose them.</GradientText>
            </Title>
            <Text>Turn your audience into email and text message subscribers.</Text>
            <ButtonContainer>
                <Button>Get Started Now</Button>
                <Button type="dark">View a Demo</Button>
            </ButtonContainer>
            <Users>
                <Circle />
                1000+ <DarkerText>creators have already started</DarkerText>
            </Users>
        </Container>
    )
}

export default Header

const Container = styled.div`
    text-align: center;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 70px;
    margin-top: 20px;
    ${mobile({
        fontSize: "40px"
    })}
`

const GradientText = styled.span`
    display: block;
    background: -webkit-linear-gradient(90deg, #FE6783 1.9%, #FFBF84 97.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Text = styled.p`
    width: 50%;
    margin: 50px auto 20px auto;
    font-size: 32px;
    ${mobile({
        fontSize: "24px"
    })}
`

const ButtonContainer = styled.div`
    
`

const Button = styled.button`
    outline: none;
    border: 1px solid ${props => props.type === "dark" ? "var(--gray)" : "var(--blue)"};
    padding: 20px 50px;
    border-radius: 10px;
    margin: 0 10px 40px 10px;
    background-color: ${props => props.type === "dark" ? "transparent" : "var(--blue)"};
    color: ${props => props.type === "dark" ? "var(--gray)" : "#fff"};
    cursor: pointer;
    ${mobile({
        padding: "10px 25px"
    })}

    &:hover {
        background-color: ${props => props.type === "dark" ? "transparent" : "transparent"};
        color: ${props => props.type === "dark" ? "#fff" : "var(--blue)"};
        border: 1px solid ${props => props.type === "dark" ? "#fff" : "var(--blue)"};
    }
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