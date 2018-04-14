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

      let location = window.location.href;
      let split = location.split('/');
      let path = split[3];

      let url;
      let padding = '32.6%';

      if (path == '') {
          url = "url('/images/2000/apples_2000_1.jpg')";
      } else if (path == '#top') {
          url = "url('/images/2000/apples_2000_1.jpg')";
      } else if (path == 'functional') {
          url = "url('/images/2000/cookies_2000_1.jpg')";
      } else if (path == 'functional#top') {
          url = "url('/images/2000/cookies_2000_1.jpg')";
      } else if (path == 'functional#functional') {
          url = "url('/images/2000/cookies_2000_1.jpg')";
      } else if (path == 'naturally-occurring') {
          url = "url('/images/2000/corn_2000_1.jpg')";
      } else if (path == 'naturally-occurring#top') {
          url = "url('/images/2000/corn_2000_1.jpg')";
      } else if (path == 'affordable') {
          url = "url('/images/2000/money_2000_1.jpg')";
      } else if (path == 'affordable#top') {
          url = "url('/images/2000/money_2000_1.jpg')";
      } else if (path == 'affordable#healthy') {
          url = "url('/images/2000/money_2000_1.jpg')";
      } else if (path == 'products') {
          url = "url('/images/2000/sugar_2000_1.jpg')";
      } else if (path == 'products#tagatose') {
          url = "url('/images/2000/sugar_2000_1.jpg')";
      } else if (path == 'products#allulose') {
            url = "url('/images/2000/sugar_2000_1.jpg')";
      } else {
          url = "url('/images/2000/apples_2000_no_blur.jpg')";
          padding = '22.5%';
      }

      let headerText;
      if (path == '') {
            headerText = (
              <div id="header-image-text">
                <span className="header-rare-relative"><span className="header-rare-absolute">Rare Sugars</span></span><br /><span className="header-are-relative"><span className="header-are-absolute">are</span></span><br /><span className="good-for-you">Good for You</span>
              </div>
            )
      } else if (path == 'functional') {
            headerText = (
              <div id="header-image-text">
                Great tasting and fully functional <br/><span className="functional-move-in">in foods and beverages</span>
              </div>
            )
      } else if (path == 'affordable') {
            headerText = (
              <div id="header-image-text">
                Robert Frost said, “Something there is that doesn’t love a wall”
              </div>
            )
      } else if (path == 'naturally-occurring') {
            headerText = (
              <div id="header-image-text">
                Natural enzymes enable the mass production of healthy rare sugars
              </div>
            )
      } else if (path == 'products') {
          headerText = (
            <div id="header-image-text">
              Tagatose and Allulose are naturally <span className="products-move-occurring">occuring, delicious <em>rare</em> sugars</span>
            </div>
            )
      } else if (path == '#top') {
            headerText = (
              <div id="header-image-text">
                <span className="header-rare-relative"><span className="header-rare-absolute">Rare Sugars</span></span><br /><span className="header-are-relative"><span className="header-are-absolute">are</span></span><br /><span className="good-for-you">Good for You</span>
              </div>
            )
      } else if (path == 'functional#top') {
            headerText = (
              <div id="header-image-text">
                Great tasting and fully functional <br/><span className="functional-move-in">in foods and beverages</span>
              </div>
            )
      } else if (path == 'functional#functional') {
            headerText = (
              <div id="header-image-text">
                Great tasting and fully functional <br/><span className="functional-move-in">in foods and beverages</span>
              </div>
            )
      } else if (path == 'naturally-occurring#top') {
            headerText = (
              <div id="header-image-text">
                Natural enzymes enable the mass production of healthy rare sugars
              </div>
            )
      } else if (path == 'affordable#top') {
            headerText = (
              <div id="header-image-text">
                Robert Frost said, “Something there is that doesn’t love a wall”
              </div>
            )
      } else if (path == 'affordable#healthy') {
            headerText = (
              <div id="header-image-text">
                Robert Frost said, “Something there is that doesn’t love a wall”
              </div>
            )
      } else if (path == 'products#tagatose') {
          headerText = (
            <div id="header-image-text">
              Tagatose and Allulose are naturally <span className="products-move-occurring">occuring, delicious <em>rare</em> sugars</span>
            </div>
            )
      } else if (path == 'products#allulose') {
          headerText = (
            <div id="header-image-text">
              Tagatose and Allulose are naturally <span className="products-move-occurring">occuring, delicious <em>rare</em> sugars</span>
            </div>
            )
      }

      const style = {
              backgroundImage: url,
              paddingTop: padding
              };

      return(
        <div id="header-container">
          <div id="top"></div>
          <div style={style} id="header-image">
          <header>
            <h1 id="header-name"><Link to="/">Bonumose</Link></h1>
            <nav>
              <ul onMouseEnter={this.onHoverLi} onMouseLeave={this.LeaveHoverLi} className="header-ul-block">
                <li><Link to="/products">Products<i className="fa fa-angle-down"></i></Link></li>
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
            {headerText}
          </div>
        </div>
      );

    }
}

export default Header;
