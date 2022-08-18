import React from "react";
import FeaturedRooms from "../components/FeaturedRooms";
import Services from "../components/Services";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="first-back">
        <div className="first-back-text">
          <h1 className="travel">TRANCE</h1>
          <h1 className="buddy">homes</h1>
        </div>
      </div>
      <Services />
      <FeaturedRooms />
      <Footer/>
    </div>
  );
};

export default Home;
