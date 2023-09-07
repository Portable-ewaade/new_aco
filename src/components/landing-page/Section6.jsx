import React from "react";
// import { Col, Row } from "react-bootstrap";

const Section6 = () => {
  return (

    <section  
    style={{
      backgroundImage: "url('/assets/card-img.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: "26rem",
      position: "relative",
      
    }}>
      <div className="position-absolute top-50 translate-middle blur-c"> 
        <img src="/assets/person-c.png" alt="a & co"
        style={{width: "18rem", marginRight: "13.4rem", marginBottom: "2rem"}} />
      </div>

        <div className="position-absolute top-50 translate-middle"
        style={{ marginLeft: "35rem" }} >
          <h3 className="fw-bold text-color ">
            Don’t Let Your <br />
            Idea Stay A Dream.
          </h3>
          <button className="btn btnn1 fs-small text-center mt-2">
          Contact
        </button>
        </div>

    </section>


       
      



    // <section className="background-bg" style={{ height: "22rem" }}>
    //   <div className="bx-section4">
    //     <Row className="py-5 ">
    //       <Col  className="text-white mt-4">
    //         <div className="" >
    //           <h4 className="fw-bold text-color ">
    //             Don’t Let Your <br />
    //             Idea Stay A Dream.
    //           </h4>
    //           <button className="btn btnn1 fs-small text-center mt-2">
    //           Contact
    //         </button>
    //         </div>
    //       </Col>
    //     </Row>
    //   </div>
    // </section>
  );
};

export default Section6;
