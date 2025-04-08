import React from "react";
import "../Pages/Page1.css";
import girl from "../Pages/girl.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Linkedin from "../Pages/Linkedin.svg";

function Photoslide() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="lorem">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={1000}
        removeArrowOnDeviceType={["mobile","desktop"]}
       
      >
        <div style={{marginTop:"70px"}} className="image-ctn">
          <img src={girl} alt="" />
          <img className="linkedin" src={Linkedin} alt="" />
        </div>
        <div  style={{marginTop:"70px"}} className="image-ctn">
          <img src={girl} alt="" />
          <img className="linkedin" src={Linkedin} alt="" />
        </div>
        <div style={{marginTop:"70px"}} className="image-ctn">
          <img src={girl} alt="" />
          <img className="linkedin" src={Linkedin} alt="" />
        </div>
        <div style={{marginTop:"70px"}} className="image-ctn">
          <img src={girl} alt="" />
          <img className="linkedin" src={Linkedin} alt="" />
        </div>
        <div style={{marginTop:"70px"}} className="image-ctn">
          <img src={girl} alt="" />
          <img className="linkedin" src={Linkedin} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Photoslide;
