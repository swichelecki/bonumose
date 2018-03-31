import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Header extends Component {
    constructor() {
      super();
      this.onHoverLi = this.onHoverLi.bind(this);
      this.LeaveHoverLi = this.LeaveHoverLi.bind(this);
      this.onHoverLiAbout = this.onHoverLiAbout.bind(this);
      this.LeaveHoverLiAbout = this.LeaveHoverLiAbout.bind(this);
      this.state = {
          hover: {display: 'none'},
          about: {display: 'none'}
      };
    }

   /*
    * @desc nav hover functions
    */

    onHoverLi(event) {
      this.setState({
        hover: {display: 'block'}
      });
    }

    LeaveHoverLi(event) {
      this.setState({
        hover: {display: 'none'}
      });
    }

    onHoverLiAbout(event) {
      this.setState({
        about: {display: 'block'}
      });
    }

    LeaveHoverLiAbout(event) {
      this.setState({
        about: {display: 'none'}
      });
    }

    render() {

      const hover = this.state.hover;
      const about = this.state.about;

      return(
        <div id="header-container">
          <div id="top"></div>
          <header>
            <h1 id="header-name"><Link to="/">Bonumose</Link></h1>
            <nav>
              <ul onMouseEnter={this.onHoverLi} onMouseLeave={this.LeaveHoverLi} className="header-ul-block">
                <li><Link to="/products">Products<i className="fa fa-angle-down"></i></Link></li>
                <li style={hover} className="absolute-li border-top"></li>
                    <li style={hover} className="absolute-li"><HashLink to="products#tagatose">Tagatose</HashLink></li>
                    <li style={hover} className="absolute-li"><HashLink to="products#allulose">Allulose</HashLink></li>
                <li style={hover} className="absolute-li"></li>
              </ul>
              <ul id="header-ul">
                <li><Link to="/naturally-occurring">Natural</Link></li>
                <li><Link to="/affordable">Affordable</Link></li>
                <li><Link to="/functional">Functional</Link></li>
              </ul>
              <div className="relative-div">
              <ul onMouseEnter={this.onHoverLiAbout} onMouseLeave={this.LeaveHoverLiAbout} className="header-ul-block-about">
                  <li><Link to="/company">About<i className="fa fa-angle-down"></i></Link></li>
                  <li style={about} className="absolute-li border-top"></li>
                  <li style={about} className="absolute-li"><Link to="/company">Company</Link></li>
                  <li style={about} className="absolute-li"><HashLink to="/company#team">Team</HashLink></li>
                  <li style={about} className="absolute-li"><Link to="/news">News</Link></li>
                  <li style={about} className="absolute-li"><HashLink to="/news#employment">Employment</HashLink></li>
                  <li style={about} className="absolute-li"></li>
              </ul>
              </div>
            </nav>
            <ul id="header-ul-social">
              <li><a href=""><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href=""><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </header>
        </div>
      );

    }
}

export default Header;
