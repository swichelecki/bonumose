import React, { Component } from 'react';

class Natural extends Component {
    constructor() {
      super();
      this.state = {};
    }

    componentDidMount() {

    window.scrollTo(0,0);

    }

    render() {

      return(
        <div>
        <div className="container">
          <div className="products-flexbox-container">
            <div className="products-photo-flexbox">
              <img id="desktop-body-image" src="/images/400/400_500_corn.jpg"/>
              <img id="mobile-body-image" src="/images/400/605_1.jpg"/>
            </div>
            <div className="products-flexbox">
              <p className="products-text-header">Naturally Occuring</p>
              <p>
              Unlike many sugar alternatives on the market today, tagatose and allulose are not artificial. They were not discovered by accident by a chemist working with coal tar, or frankensteined together by inserting chlorine molecules into sugar. Tagatose and allulose are known as rare sugars because they occur in nature but only in tiny quantities.
              </p>
              <p>
              Tagatose is found in apples, some grains, dairy, and the cacao tree (from which chocolate is derived). Allulose is found in figs, raisins, and some grains. Unfortunately, the amounts are so small that it would not be sustainable — environmentally or economically — to try to harvest tagatose and allulose from their naturally occurring sources.
              </p>
              <p>
              Fortunately, molecules of tagatose and allulose have the same number of carbon, hydrogen, and oxygen atoms as found in the glucose molecules linked together in plant-derived starch. By applying naturally occurring enzymes in a precise way, Bonumose is able to produce large quantities of affordable, pure, nutritious tagatose and allulose (as well as other #goodsugars).
              </p>
            </div>
        </div>
        <div className="products-flexbox-container bottom-margin">
          <div className="products-photo-flexbox-two-desktop">
            <img id="mobile-body-image" src="/images/400/605_1.jpg"/>
          </div>
          <div className="products-flexbox">
            <p className="products-text-header-two">Enzymes</p>
            <p>
            Enzymes occur naturally in foods, and also have been used for millennia to make food such as cheese, yogurt and other foods. Plants use enzymes to convert nutrients into energy and plant mass.
            </p>
            <p>
            Bonumose has unique ability to discover naturally occurring enzymes to enable the economically and environmentally sustainable mass production of healthy ingredients from globally abundant plant material.
            </p>
          </div>
          <div className="products-photo-flexbox-two">
            <img id="desktop-body-image" src="/images/400/400_500_potatoes.jpg"/>
          </div>
        </div>
        </div>
        </div>
      );

    }
}

export default Natural;
