import styled from "styled-components";
import { mobile } from "../responsive";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const menuIconClick = () => setMenuCollapse(!menuCollapse);
    return (
        <>
            <Container>
                <Left>
                    <Logo src="/images/logo.png" />
                    Marico
                </Left>
                <Center>
                    <CenterItem>
                        <Link to="/">Use cases</Link>
                    </CenterItem>
                    <CenterItem>
                        <Link to="/">About</Link>
                    </CenterItem>
                    <CenterItem type="active">
                        <Link to="/">Pricing</Link>
                    </CenterItem>
                    <CenterItem>
                        <Link to="/">Blog</Link>
                    </CenterItem>
                </Center>
                <Right>
                    <Login>Login</Login>
                    <Register>Sign Up</Register>
                </Right>
                <HamburgerMenu onClick={menuIconClick}>
                        <HamburgerItem></HamburgerItem>
                </HamburgerMenu>
            </Container>
            <Sidebar collapsed={menuCollapse}>
                <List>
                    <Item>
                        <Link to="/">Use cases</Link>
                    </Item>
                    <Item>
                        <Link to="/">About</Link>
                    </Item>
                    <Item type="active">
                        <Link to="/">Pricing</Link>
                    </Item>
                    <Item>
                        <Link to="/">Blog</Link>
                    </Item>
                </List>
                <User>
                    <Login>Login</Login>
                    <Register>Sign Up</Register>
                </User>
            </Sidebar>
        </>
    )
}

export default Navbar

const Container = styled.nav`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    a {
        text-decoration: none;
        color: inherit;
    }
`

const Left = styled.div`
    display: flex;
    align-items: center;
    font-weight: 800;
    font-size: 32px;
    cursor: pointer;
    ${mobile({
        fontSize: "24px"
    })}
`

const Logo = styled.img`
    max-width: 100%;
    height: 45px;
    margin-right: 15px;
    ${mobile({
        height: "36px"
    })}
`

const Center = styled.ul`
    list-style: none;
    display: flex;
    ${mobile({display: "none"})}
`

const CenterItem = styled.li`
    cursor: pointer;
    margin: 0 10px;
    color: ${props => props.type === "active" ? "var(--blue)" : "var(--gray)"};
    font-weight: 500;
    transition: 0.2s;
    

    &:hover {
        color: var(--blue);
    }
`

const Right = styled.div`
    ${mobile({display: "none"})};
`

const Login = styled.button`
    padding: 10px 17px;
    border-radius: 5px;
    outline: none;
    border: none;
    color: var(--gray);
    background-color: transparent;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.2s ease;

    &:hover {
        border-color: var(--gray);
    }
`

const Register = styled(Login)`
    margin-left: 10px;
    background-color: var(--blue);
    color: #fff;

    &:hover {
        background-color: transparent;
        border-color: var(--blue);
        color: var(--blue);
    }
`

const HamburgerMenu = styled.div`
    display: none;
    cursor: pointer;
    ${mobile({
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    })};
`

const HamburgerItem = styled.div`
    padding: 2px 15px;
    background-color: #fff;
    box-shadow: 0 10px 0 currentColor, 0 -10px 0 currentColor;
`

const Sidebar = styled.div`
    position: fixed;
    left: -1000px;
    ${mobile({
        height: "100vh",
        position: "fixed",
        width: "220px",
        backgroundColor: "black",
        zIndex: "2",
        top: "0",
        boxShadow: "0 0 10px white",
        textAlign: "center",
        transition: "all 0.35s ease-in-out",
        left: props => props.collapsed ? "0" : "-1000px"
    })};
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
`

const Item = styled.li`
    padding: 20px 0;
    color: ${props => props.type === "active" && "var(--blue)"};
`

const User = styled.div`
    margin-top: 100px;
`