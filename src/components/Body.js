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
          <div className="container">
            <div className="products-photo-flexbox-home">
              <img id="mobile-body-image-home" src="/images/400/1210_apples.jpg"/>
            </div>
            <p className="body-header">Good for You Sugars</p>
            <div className="flexbox-container">
              <div className="flexbox">
                <HashLink to="/products#tagatose">
                  <img className="body-product-image" src="/images/tagatose.png" />
                  <p className="home-flex-title">Tagatose</p>
                  <p className="home-flex-info">Tagatose is not like other sugars. Tagatose is good-for-you sugar. It is a delicious <em>rare</em> sugar occurring in tiny quantities in some fruits and grains. </p>
                  <p className="home-flex-learn">Learn More</p>
                </HashLink>
              </div>
              <div className="flexbox">
                <HashLink to="/products#allulose">
                  <img className="body-product-image" src="/images/psicose.png" />
                  <p className="home-flex-title">Allulose</p>
                  <p className="home-flex-info">Allulose also is a good-for-you, <em>rare</em> sugar. Like Tagatose, Allulose works really well in all sweetened foods and beverages. </p>
                  <p className="home-flex-learn">Learn More</p>
                </HashLink>
              </div>
            </div>
          </div>
          <Natural />
          <Rectangles/>
        </div>
      );
    }
}

class Natural extends Component {

    render() {

        return(
          <div id="natural-wrapper">
              <div className="container">
                <p className="natural-header">Naturally Occurring</p>
                <p className="natuarl-p">Tagatose and allulose are naturally occurring, healthy rare sugars. We produce the good-for-you sugars from globally abundant plant material.</p>
                <Link to='/naturally-occurring' className="learn-more-a">Learn More</Link>
              </div>
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
