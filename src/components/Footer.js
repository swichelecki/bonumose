import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Footer extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render(){

    return (
      <div id="footer-wrapper">
        <div className="container">
         <div className="responsive-center">
          <div className="responsive-inline">
            <div className="footer-div-one">
              <HashLink to="/#top">
                <h2 id="footer-name">Bonumose</h2>
              </HashLink>
              <span className="footer-icon">
                <a href="https://twitter.com/bonumose" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true">
                  </i>
                </a>
              </span>
              <span className="footer-icon">
                <a href="https://www.linkedin.com/jobs/search/?keywords=bonumose&location=United%20States&locationId=us%3A0" target="_blank">
                  <i className="fa fa-linkedin">
                  </i>
                </a>
              </span>
            </div>
            <div className="footer-div-two">
            Bonumose LLC <br/>
            1725 Discovery Drive <br/>
            Suite 220 <br/>
            Charlottesville, VA 22911
            </div>
          </div>
          <div className="footer-div-three">
            <ul className="footer-ul">
              <li><span className="footer-list-header">Products:</span></li>
              <li><HashLink to="/products#tagatose">Tagatose</HashLink></li>
              <li><HashLink to="/products#allulose">Allulose</HashLink></li>
            </ul>
          </div>
          <div className="footer-div-three">
            <ul className="footer-ul">
              <li><span className="footer-list-header">Overview:</span></li>
              <li><HashLink to="/naturally-occurring#top">Natural</HashLink></li>
              <li><HashLink to="/affordable#healthy">Healthy</HashLink></li>
              <li><HashLink to="/affordable#top">Affordable</HashLink></li>
              <li><HashLink to="/functional#top">Delicious</HashLink></li>
              <li><HashLink to="/functional#functional">Functional</HashLink></li>
            </ul>
          </div>
          <div className="footer-div-three">
            <ul className="footer-ul">
              <li><span className="footer-list-header">About:</span></li>
              <li><HashLink to="/company#top">Company</HashLink></li>
              <li><HashLink to="/company#team">Team</HashLink></li>
              <li><HashLink to="/news#top">News</HashLink></li>
              <li><HashLink to="/news#employment">Employment</HashLink></li>
            </ul>
          </div>
          <div className="footer-div-three">
            <ul className="footer-ul">
              <li>&copy; 2018</li>
              <li>All rights reserved</li>
              <li><a href="mailto:erogers@bonumose.com">contact@bonumose.com</a></li>
            </ul>
          </div>
         </div>
        </div>
      </div>
    );

  }

}

export default Footer;
