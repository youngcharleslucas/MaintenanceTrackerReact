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
import { Container } from "react-bootstrap";
import "./home.css";

const Home = (props) => {
  return (
    <Container fluid>
      <React.Fragment>
        <div className="image">
          <h1>
            <img src="https://i.ibb.co/py4SmNk/Blank-2000-x-2000-1000-x-500.png" />
          </h1>
          <p>
            <a href="/buyer" class="btn btn-dark">
              Buy
            </a>{" "}
            &nbsp;
            <a href="/seller" class="btn btn-dark">
              Sell
            </a>
          </p>
        </div>
      </React.Fragment>
    </Container>
  );
};

export default Home;
