import React from "react";
import './index.css';
import {NavLink} from 'react-router-dom';
import { homePath, introPath, signInPath, signUpPath } from '../../../constants';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import browseImage from "../../../assets/browseImage.jpg"
import signInImage from "../../../assets/signInImage.jpg"
import signUpImage from "../../../assets/signUpImage.jpg"

class IntroComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthorized: false,
        };

    }

    render() {
        return (
            <div className="introMain">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              useKeyboardArrows
              transitionTime={1000}
              width="500px"
            >
             
              <div className="slide-holder">
                <img
                  alt=""
                  src={signInImage}
                />
                <NavLink to={signInPath}><button className="introButton"> Sign In</button></NavLink>
                <div className="text-container">
                 
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
              <div className="slide-holder">
                <img
                  alt=""
                  src={signUpImage}
                />
                <div className="text-container">
                    <NavLink to={signUpPath}> <button className="introButton"> Sign Up</button></NavLink>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
              <div className="slide-holder">
                <img
                  alt=""
                  src={browseImage}
                />
                <div className="text-container">
                    <NavLink to={homePath}><button className="introButton"> Browse</button></NavLink>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        );
    }
}


export default IntroComponent;

