// import React from 'react';
// import "./home.css";
// // copied one below from eCommerce
// import "bootstrap/dist/css/bootstrap.css";
// // import background from "../images/light-black-and-white-white-car-photography-vintage-919329-pxhere.com"


// const Home = (props) => {
//     return (
//         // <div style={{ backgroundImage: `url(${background})`}}>
//         // <div>
//         <div style={{ 
//             backgroundImage: `url("https://pxhere.com/en/photo/919329?utm_content=shareClip&utm_medium=referral&utm_source=pxhere")`
//         }}>
//             <h1>Home Page</h1>
//         </div>
//     );
// };

// export default Home;

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
