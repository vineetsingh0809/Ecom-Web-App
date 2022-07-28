import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  background-color: rgb(3, 26, 28);
  ${Mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${Mobile({ backgroundColor: "#222" })}
`;

const Logo = styled.h1`
  color: white;
`;

const Desc = styled.p`
  margin: 20px 0 20px 10px;
  color: white;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
  margin-right: 15px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  ${Mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DevShop.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, quos
          blanditiis commodi voluptates ut consectetur debitis magnam nihil
          repudiandae! Unde quod id quidem natus corrupti illo quisquam
          cupiditate ab magnam?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="0077b5">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="000000">
            <GitHub />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Kids Fashion</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Reach Us</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} />
          2/349 - Vibhav Khand-2, Gomti Nagar, Lucknow - Uttar Pradesh (India)
          -226010
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +916359184895
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          gamingbrawlers12@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
