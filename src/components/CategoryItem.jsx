import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
  flex: 2;
  margin: 3px;
  height: 50vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit; cover;
  ${Mobile({ height: "35vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-item: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  margin: 0 190px 0 190px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
  ${Mobile({ padding: "7px", fontSize: "15px", margin: "0 140px 0 140px" })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>BUY NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
