import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";

const Home = (props) => {
  return (
    <Container fluid>
      <React.Fragment>
            <Row className="home-row">
                <Col className="home-container-green"></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row className="home-row">
                <Col className="home-container-green"></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row className="home-row">
                <Col className="home-container">
                    <h1 className="home-title">
                        Don't miss an oil change or a tire rotation!
                    </h1>
                    <p className="home-text">
                        Have remiders of when important maintenance is approaching. Vehicles take lots of wear and tear for every mile they are on the road. Keep your vehicle reliable by giving it the care it needs to get you places.
                    </p>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
          
      </React.Fragment>
    </Container>
  );
};

export default Home;
