import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Body extends Component {
    constructor() {
      super();
      this.state = {

      };
    }

    componentWillMount() {
      window.scrollTo(0,0);
    }

    render() {

      return(
        <div>
          <div id="header-image">
            <p id="header-image-text">
              <strong><span className="header-rare-relative"><span className="header-rare-absolute">Rare Sugars</span></span></strong><br /><span className="header-are-relative"><span className="header-are-absolute">are</span></span><br /><strong>Good for You</strong>
            </p>
          </div>
          <div className="container">
            <p className="body-header">Good for You Sugars</p>
            <div className="flexbox-container">
              <div className="flexbox">
                <HashLink to="/products#tagatose">
                  <img className="body-product-image" src="https://dummyimage.com/175x150/ababab/ffffff.jpg&text=175+x+150" />
                  <h2 className="home-flex-title">Tagatose</h2>
                  <p className="home-flex-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <p className="home-flex-learn">Learn More</p>
                </HashLink>
              </div>
              <div className="flexbox">
                <HashLink to="/products#allulose">
                  <img className="body-product-image" src="https://dummyimage.com/175x150/ababab/ffffff.jpg&text=175+x+150" />
                  <h2 className="home-flex-title">Allulose</h2>
                  <p className="home-flex-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <p className="home-flex-learn">Learn More</p>
                </HashLink>
              </div>
            </div>
            <Natural />
          </div>
          <Rectangles/>
        </div>
      );
    }
}

class Natural extends Component {

    render() {

        return(
          <div id="natural-wrapper">
              <p className="body-header">Naturally Occurring</p>
              <p>Tagatose and allulose are naturally occurring, healthy rare sugars. We produce the good-for-you sugars from globally abundant plant material.</p>
              <Link to='/naturally-occurring' className="learn-more-a">Learn More</Link>
          </div>
        );
    }
}

class Rectangles extends Component {

    render() {

        return(
          <div>
            <div id="rectange-flexbox-container">
                <div className="flex-rect-one">
                  <HashLink to="/affordable#healthy">
                    <p className="rectangle-text">Healthy</p>
                  </HashLink>
                </div>
                <div className="flex-rect-two">
                  <Link to="/affordable">
                    <p className="rectangle-text">Affordable</p>
                  </Link>
                </div>
                <div className="flex-rect-three">
                  <Link to="/functional">
                    <p className="rectangle-text">Delicious</p>
                    </Link>
                </div>
                <div className="flex-rect-four">
                  <HashLink to="/functional#functional">
                    <p className="rectangle-text">Functional</p>
                  </HashLink>
                </div>
            </div>
          </div>
        );
    }
}

export default Body;
