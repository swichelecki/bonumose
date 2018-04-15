import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Functional extends Component {
    constructor() {
      super();
      this.state = {};
    }

    componentWillMount() {
      window.scrollTo(0,0);
    }

    render() {

        return(
          <div>
          <div className="container">
            <div className="products-flexbox-container">
              <div className="products-photo-flexbox">
                <img src="/images/400/400_500_icecream.jpg"/>
              </div>
              <div className="products-flexbox">
                <p className="products-text-header">Great Tasting</p>
                <p>
                First, and importantly, tagatose and allulose taste great. Unlike some other sugar alternatives, tagatose and allulose are not fake and they are not weird-tasting. No off-taste or bitter notes. Bad taste is not a precondition of healthiness! And tagatose, in particular, is not just half-way as sweet as regular sugar, requiring you to use twice as much to achieve the same sweetness.
                </p>
                <p>
                Tagatose is 92% as sweet as sucrose (table sugar), and its sweetness is consistent with sucrose across all concentrations <span className="anchor-underline"><a href="http://onlinelibrary.wiley.com/doi/10.1111/j.1750-3841.2012.02844.x/abstract" target="_blank">(see here)</a></span>.
                </p>
                <p>
                Allulose is less sweet than tagatose (70% relative sweetness to sucrose), but still great-tasting. If you want to judge for yourself, <span className="anchor-underline"><a href="https://www.questnutrition.com/pages/hero" target="_blank">try these</a></span>.
                </p>
              </div>
            </div>
            <div id="functional" className="products-flexbox-container bottom-margin">
              <div className="products-flexbox">
              <p className="products-text-header-two">Functional</p>
              <p>
              Sweetness is but one of the positive features of sucrose (regular sugar). It also provides bulk and structure for foods, reduces water activity to help prevent food spoilage, depresses freezing temperature to make ice cream smooth, caramelizes, and does a variety of other things.
              </p>
              <p>
              High-intensity sweeteners — such as stevia, monk fruit, sucralose, aspartame and others — have benefits. But because they are so sweet by volume, they do not have the ability to add bulk, structure or mouthfeel to foods and beverages. Next time you’re in the grocery store and see one of these on the shelf, take a look at the ingredients list. What do you see listed first? Probably maltodextrin or dextrose. Those ingredients are there to provide bulk to the high-intensity sweetener, and those ingredients has the same calories as regular sugar.
              </p>
              <p>
              Other sugar alternatives, such as sugar alcohols, often have much less sweetness than sucrose, which requires more volume to achieve the same sweetness. Furthermore, sugar alcohols do not have the ability to caramelize, or produce the desirable browning in baked goods.
              </p>
              <p>
              Unlike other sugar alternatives, tagatose and allulose are fully functional in foods and beverages.
              </p>
            </div>
            <div className="products-photo-flexbox-two">
              <img src="/images/400/400_500_cookies.jpg"/>
            </div>
            </div>
          </div>
          </div>
        );
    }
}

export default Functional;
