import styled from "styled-components";
import { mobile } from "../responsive";

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    <Image src="/images/logo.png" />
                    Marico
                </Logo>
                <Email>info@marico.co</Email>
            </Left>
            <Right>
                <Item>About</Item>
                <Item type="active">Pricing</Item>
                <Item>Blog</Item>
                <Item>Sign In</Item>
            </Right>
        </Container>
    )
}

export default Footer

const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    margin-top: 100px;
    padding: 50px 0;
    ${mobile({
        flexDirection: "column"
    })}
`

const Left = styled.div`
    ${mobile({
        marginBottom: "20px",
        textAlign: "center"
    })}
`

const Logo = styled.div`
    font-size: 32px;
    display: flex;
    align-items: center;
    font-weight: 700;
    cursor: pointer;
`

const Image = styled.img`
    max-width: 100%;
    margin-right: 10px;
`

const Email = styled.p`
    color: var(--gray);
    margin-top: 10px;
`

const Right = styled.ul`
    list-style: none;
    display: flex;
`

const Item = styled.li`
    margin-left: 20px;
    color: ${props => props.type === "active" && "var(--blue)"};
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        color: var(--blue);
    }
`