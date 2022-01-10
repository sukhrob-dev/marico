import styled from "styled-components";
import { mobile } from "../responsive";

const Main = () => {
    return (
        <>
            <Container>
                <Heading>
                    <Step>Step 1</Step>
                    <Title>Connect Your Content</Title>
                    <Text>Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online.</Text>
                    <Button type="dark">View Available Sources</Button>
                </Heading>
                <Homepage>
                    <Left>
                        <HomepageHeading>Your Homepage</HomepageHeading>
                        <HomepageTitle>Your Content. All in <Blue>One Spot</Blue></HomepageTitle>
                        <List>
                            <ListItem>
                                <ListNumber>1</ListNumber>
                                <ListText>Bring all of your content together into one homepage.</ListText>
                            </ListItem>
                            <ListItem>
                                <ListNumber>2</ListNumber>
                                <ListText>Your page automatically updates whenever you create.</ListText>
                            </ListItem>
                        </List>
                        <ButtonContainer>
                            <Button>Get Started Now</Button>
                            <Button type="dark">View a Demo</Button>
                        </ButtonContainer>
                    </Left>
                    <Right>
                        <Image src="/images/spot.png" />
                    </Right>
                </Homepage>
                <Heading>
                    <Step>Step 2</Step>
                    <Title>Share Your Homepage</Title>
                    <Text>Share your Wavium homepage link with your followers, and we'll handle the rest.</Text>
                </Heading>
                <Cards>
                    <Card>
                        <GreenLink>One Link</GreenLink>
                        <CardText>
                            <Gray>All You Create.</Gray>
                            One Link.
                        </CardText>
                        <CardImage src="/images/mobile.png" />
                    </Card>
                    <Card>
                        <GreenLink>Collect Subscribers</GreenLink>
                        <CardText>
                            <Gray>Emails.</Gray>
                            <Gray>Phone #.</Gray>
                            All Yours.
                        </CardText>
                    </Card>
                </Cards>
                <Center>
                    <Button>Get Started</Button>
                </Center>
                <Heading>
                    <Step>Step 3</Step>
                    <Title>Send Emails &amp; Text Messages</Title>
                    <Text>No more going through a social platform. Reach and engage your audience directly over email and text massage.</Text>
                </Heading>
                <Homepage>
                    <Left>
                        <HomepageHeading>Create &amp; Share</HomepageHeading>
                        <HomepageTitle>Reach All Your Audience <Blue>Directly</Blue></HomepageTitle>
                        <List>
                            <ListItem>
                                <ListNumber>1</ListNumber>
                                <ListText>Embed content or create something new to share.</ListText>
                            </ListItem>
                            <ListItem>
                                <ListNumber>2</ListNumber>
                                <ListText>Share content over email, text message or your homepage.</ListText>
                            </ListItem>
                        </List>
                        <ButtonContainer>
                            <Button>Get Started Now</Button>
                            <Button type="dark">View a Demo</Button>
                        </ButtonContainer>
                    </Left>
                    <Right>
                        <Image src="/images/directly.png" />
                    </Right>
                </Homepage>
                <Heading>
                    <Title>Experts Agree</Title>
                </Heading>
            </Container>
            <Image type="expert" src="/images/experts.png" />
            <Avatar>
                <AvatarText>We've helped over 1,000 creatorsre claim control of their audience.</AvatarText>
            </Avatar>
        </>
    )
}

export default Main

const Container = styled.main`
    width: 90%;
    margin: auto;
`

const Heading = styled.div`
    text-align: center;
    width: 70%;
    margin: 100px auto;
`

const Step = styled.p`
    color: var(--blue);
    text-transform: uppercase;
`

const Title = styled.h2`
    font-size: 60px;
    ${mobile({
        fontSize: "40px"
    })}
`

const Text = styled.p`
    color: var(--gray);
    width: 70%;
    margin: 20px auto;
    ${mobile({
        fontSize: "12px"
    })}
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

const Homepage = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    })}
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const HomepageHeading = styled.h3`

`

const HomepageTitle = styled.div`
    font-size: 60px;
    font-weight: 600;
    ${mobile({
        fontSize: "40px",
        margin: "20px 0",
    })}
`

const List = styled.div`
    ${mobile({
        marginBottom: "20px"
    })}
`

const ListItem = styled.div`
    display: flex;
    align-items: center;
`

const ListNumber = styled.div`
    width: 25px;
    height: 25px;
    background-color: var(--gray);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 10px 10px 0;
`

const ListText = styled.div``

const Blue = styled.span`
    color: var(--blue);
`

const Image = styled.img`
    max-width: 100%;
    height: ${props => props.type === "expert" ? "auto" : "80vh"};
    object-fit: cover;
    object-position: left;
`

const ButtonContainer = styled.div``

const Right = styled.div``

const Cards = styled.div`
    display: flex;
    ${mobile({
        flexDirection: "column"
    })}
`

const Card = styled.div`
    background-color: #0d0d0d;
    width: 100%;
    margin: 10px;
    padding: 20px;
    ${mobile({
        margin: "20px",
    })}
`

const CardText = styled.div`
    font-size: 70px;
    line-height: 1;
    margin: 30px 0;
    ${mobile({
        fontSize: "40px"
    })}
`

const CardImage = styled.img`
    max-width: 100%;
`

const Gray = styled.p`
    color: #919191;
    margin: 0;
`

const GreenLink = styled.p`
    color: var(--green);
    margin-bottom: 20px;
`

const Center = styled.div`
    text-align: center;
    margin-top: 20px;
`

const Avatar = styled.div`
    text-align: center;
    padding: 150px 0;
    margin: 120px 0;
    background-image: url("/images/avatars.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const AvatarText = styled.h2`
    color: #fff;
    font-size: 50px;
    width: 70%;
    margin: auto;
    ${mobile({
        fontSize: "32px"
    })}
`