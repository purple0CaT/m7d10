import { Col, Container, Row } from "react-bootstrap";
import FourDay from "./FourDay";
import "./style.css";
import MainCard from "./MainCard";

function Home() {
  return (
    <Container>
      <br />
      <Row>
        <MainCard />
        <FourDay />
      </Row>
    </Container>
  );
}

export default Home;
