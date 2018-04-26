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
      this.openCloseMobileNav = this.openCloseMobileNav.bind(this);
      this.state = {
          hover: {display: 'none'},
          about: {display: 'none'},
          open: false
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

   /*
    * @desc opens and closes mobile nav
    */

    openCloseMobileNav(event) {

      let mobileNav = this.state.open;

      if (mobileNav == false) {
          this.setState({
            open: true
          });
      } else if (mobileNav == true) {
          this.setState({
            open: false
          });
      }
    }

    render() {

      const transform = this.state.transform;
      const webkitTransform = this.state.transform;
      const mozTransform = this.state.transform;
      const transition = this.state.transition;
      const webkitTransition = this.state.transition;
      const mozTransition = this.state.transition;

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
          padding = '22.6%';
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
        <div>
        {this.state.open && <MoveBodyTag />}
        <nav className="mobile-nav">
          <Link onClick={this.openCloseMobileNav} to="/products" className="mobile-nav-link">Products<i className="fa fa-angle-down"></i></Link>
          <HashLink onClick={this.openCloseMobileNav} to="products#tagatose" className="mobile-nav-link mobile-indent">Tagatose</HashLink>
          <HashLink onClick={this.openCloseMobileNav} to="products#allulose" className="mobile-nav-link mobile-indent">Allulose</HashLink>
          <Link onClick={this.openCloseMobileNav} to="/naturally-occurring" className="mobile-nav-link">Natural</Link>
          <Link onClick={this.openCloseMobileNav} to="/affordable" className="mobile-nav-link">Affordable</Link>
          <Link onClick={this.openCloseMobileNav} to="/functional" className="mobile-nav-link">Functional</Link>
          <Link onClick={this.openCloseMobileNav} to="/company" className="mobile-nav-link">About<i className="fa fa-angle-down"></i></Link>
          <Link onClick={this.openCloseMobileNav} to="/company" className="mobile-nav-link mobile-indent">Company</Link>
          <HashLink onClick={this.openCloseMobileNav} to="/company#team" className="mobile-nav-link mobile-indent">Team</HashLink>
          <Link onClick={this.openCloseMobileNav} to="/news" className="mobile-nav-link mobile-indent">News</Link>
          <HashLink onClick={this.openCloseMobileNav} to="/news#employment" className="mobile-nav-link mobile-indent">Employment</HashLink>
          <a className="mobile-nav-link" href="https://twitter.com/bonumose"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
          <a className="mobile-nav-link" href="https://www.linkedin.com/jobs/search/?keywords=bonumose&location=United%20States&locationId=us%3A0"><i className="fa fa-linkedin"></i></a>
        </nav>
        <div id="header-container">
          <div id="top"></div>
          <div style={style} id="header-image">
          <header className="clearfix">
            <h1 id="header-name"><Link to="/">Bonumose</Link></h1>
            <a onClick={this.openCloseMobileNav} id="mobile-nav-button"><i className="fa fa-bars" aria-hidden="true"></i></a>
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
              <li><a href="https://twitter.com/bonumose"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/jobs/search/?keywords=bonumose&location=United%20States&locationId=us%3A0"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </header>
            {headerText}
          </div>
        </div>
        </div>
      );

    }
}

class MoveBodyTag extends Component {

  /*
   * @desc clicking burger mounts or unmounts component. component moves body tag
   */

   componentDidMount() {
     document.getElementById('body').className="open-mobile-nav";
   }

   componentWillUnmount() {
     document.getElementById('body').className="close-mobile-nav";
   }

    render() {

       return(
         <div></div>
       );
    }
}

export default Header;
