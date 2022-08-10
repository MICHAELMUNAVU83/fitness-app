import React from 'react'
import { FaCocktail ,FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

const Services = () => {
  return (
    <div>
        <h4>SERVICES</h4>
        <div className="four-services-div">
            <div>
                <FaCocktail/>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
            </div>
            <div>
                <FaHiking/>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
            </div>
            <div>
                <FaShuttleVan/>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
            </div>
            <div>
                <FaBeer/>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
            </div>
        </div>
    </div>
  )
}

export default Services