import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <h2 className="servicesh4">SERVICES</h2>
      <div className="service-line"></div>
      <div className="four-services-div">
        <div className="each-service">
          <i> <FaCocktail /></i>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
        </div>
        <div className="each-service">
         <i><FaHiking /></i> 
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
        </div>
        <div className="each-service">
          <i><FaShuttleVan /> </i>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
        </div>
        <div className="each-service">
          <i> <FaBeer /></i>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
