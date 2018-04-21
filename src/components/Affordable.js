import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Affordable extends Component {
    constructor() {
      super();
      this.state = {};
    }

    componentDidMount() {

      window.scrollTo(0,0);

    }

    render() {

        return(
          <div id="affordable">
          <div className="container">
            <div className="products-flexbox-container">
              <div className="products-photo-flexbox">
                <img id="desktop-body-image" src="images/400/400_500_money.jpg"/>
                <img id="mobile-body-image" src="/images/400/605_1.jpg"/>
              </div>
              <div className="products-flexbox">
                <p className="products-text-header">Affordable</p>
                <p>
                With apologies to the master poet, we think, “Something there is that doesn’t love unaffordable healthy food.” Where’s the good in unnecessary barriers between your family and nutritious food? Ideally, shouldn’t good-for-you food have a good price? If the choice of healthy food is available only for those with healthy incomes, there is something unsatisfying about that. At least to us.
                </p>
                <p>
                Because of our breakthrough enzymatic technology, healthy, delicious tagatose and allulose will be available in the near future for a small fraction of the cost other companies charge today. We are making good-for-you sugar affordable for widespread use in your favorite foods and beverages.
                </p>
              </div>
          </div>
          <div id="healthy" className="products-flexbox-container bottom-margin">
            <div className="products-photo-flexbox-two-desktop">
              <img id="mobile-body-image" src="/images/400/605_1.jpg"/>
            </div>
            <div className="products-flexbox">
              <p className="products-text-header-two">Healthy</p>
              <p>
              Tagatose and allulose are healthy and still great tasting:
              </p>
              <p className="affordable-heading">
              Low glycemic
              </p>
              <p>
              Tagatose has a glycemic index of 3 compared to 68 for sucrose and 100 for glucose. Allulose’s glycemic index is only 1. Consumption of tagatose and allulose do not increase blood sugar or insulin. In fact, tagatose was proven in phase 3 clinical trials to decrease blood sugar levels in diabetics, and is approved in European food labeling regulations for blood glucose lowering claims.
              </p>
              <p className="affordable-heading">
              Safe for teeth
              </p>
              <p>
              Tagatose and allulose do not cause dental cavities. In fact, tagatose is proven to break-up dental biofilm. So not only does it not hurt dental health, it actually improves it.
              </p>
              <p className="affordable-heading">
              Low Calorie
              </p>
              <p>
               Allulose has only 10% of the calories of sucrose (regular sugar), and tagatose has only 38% of regular sugar’s calories. This is because allulose is fully absorbed by the small intestine and fully excreted in urine, without entering the blood stream or being converted to energy. Tagatose is absorbed only 20% in the small intestine, with 80% entering the large intestine where it feeds the good gut bacteria. There’s evidence tagatose actually contributes to weight loss, not weight gain.
              </p>
              <p className="affordable-heading">
              Prebiotic
              </p>
              <p>
              Tagatose is a prebiotic. It is like soluble dietary fiber. In the large intestine, it increases the production of beneficial short-chain fatty acids, leading to a healthy gut. Good gut health is associated with good brain function and overall health.
              </p>
              <p>
              Tagatose and allulose are not just not bad for you. They are good for you. Beyond benign, they are beneficial.
              </p>
            </div>
            <div className="products-photo-flexbox-two">
              <img id="desktop-body-image" src="/images/400/400_500_healthy.jpg"/>
            </div>
          </div>
          </div>
          </div>
        );
    }
}

export default Affordable;
