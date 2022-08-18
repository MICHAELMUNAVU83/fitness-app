import React from "react";
import {FaFileContract, FaRegMoneyBillAlt } from "react-icons/fa";
import {GiHouse } from "react-icons/gi";
import {MdSupportAgent } from "react-icons/md";

const Services = () => {
  return (
    <div>
      <h2 className="servicesh4">SERVICES</h2>
      <div className="service-line"></div>
      <div className="four-services-div">
        <div className="each-service">
          <i> <GiHouse /></i>
          <p>Schedule with our Agents A Site Visit to your next Home</p>
        </div>
        <div className="each-service">
         <i><FaFileContract /></i> 
          <p>Issuance of Valid and Original Title Deeds after Purchase of a house</p>
        </div>
        <div className="each-service">
          <i><MdSupportAgent /> </i>
          <p>Call in Anytime and have a chat with our Agents</p>
        </div>
        <div className="each-service">
          <i> <FaRegMoneyBillAlt /></i>
          <p>Pay a fee only after you have found the Perfect House </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
