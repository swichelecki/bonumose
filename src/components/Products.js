import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Products extends Component {
    constructor() {
      super();
      this.state = {

      };
    }

    componentDidMount() {

      window.scrollTo(0,0);

    }

    render() {

        return(
          <div>
          <div className="container">
            <div id="tagatose" className="products-flexbox-container">
              <div className="products-photo-flexbox">
                <img src="images/tagatose.png"/>
              </div>
              <div className="products-flexbox">
                <p className="products-text-header">Tagatose</p>
                <p>
                Tagatose is a delicious rare sugar. It occurs in tiny quantities in some fruits and grains. It is not fake or weird tasting. Tagatose tastes nearly identical to sucrose (table sugar), without any bitter notes or off-flavors. Tagatose works really well in all sweetened foods and beverages, in full or partial replacement of sucrose and high-fructose corn syrup.
                </p>
                <p>
                Tagatose is extremely healthy, too. It does not increase blood sugar levels or insulin (glycemic index = 3, compared to 68 for sucrose), or lead to fatty liver disease. It is low-calorie (38% of sucrose). It does not cause tooth decay. Furthermore, tagatose is a verified prebiotic: it feeds the good gut bacteria, leading to the production of beneficial short-chain fatty acids. In the body, it acts much like fiber.
                </p>
                <p>
                Tagatose has been available commercially for over 15 years, but it is very expensive. The typical production process starts with relatively high-cost raw material (usually derived from milk), has expensive processing steps, and results in relatively low yields. Bonumose’s breakthrough process, however, starts with low-cost, abundant, plant-based raw material; has relatively inexpensive, enzymatic processing steps; and results in extremely high yields.
                </p>
              </div>
          </div>
          <div id="allulose" className="products-flexbox-container bottom-margin">
            <div className="products-flexbox">
              <p className="products-text-header-two">Allulose</p>
              <p>
              Allulose is a delicious rare sugar. Allulose is approximately 70% as sweet as sucrose (table sugar), without any bitter notes or off-flavors. Like tagatose, allulose works really well in all sweetened foods and beverages, in full or partial replacement of sucrose and high-fructose corn syrup.
              </p>
              <p>
              Allulose is extremely healthy, too. It does not increase blood sugar levels or insulin (glycemic index = 1, compared to 68 for sucrose), or lead to fatty liver disease. It is low-calorie (10% of sucrose). And it does not cause tooth decay.
              </p>
              <p>
              Allulose has been available commercially for a few years, but it is expensive. The typical production process starts with fructose, has expensive processing steps, and results in relatively low yields. Bonumose’s breakthrough process, however, starts with low-cost, abundant, plant-based raw material; has relatively inexpensive, enzymatic processing steps; and results in extremely high yields.
              </p>
              <p>
              The good folks at <span className="anchor-underline"><a href="https://www.questnutrition.com/" target="_blank">Quest Nutrition</a></span> created an informative, short <span className="anchor-underline"><a href="https://www.youtube.com/watch?v=IlGMliuTVYk&feature=youtu.be" target="_blank">video about allulose</a></span>.
              </p>
            </div>
            <div className="products-photo-flexbox-two">
              <img src="images/psicose.png"/>
            </div>
          </div>
          </div>
          </div>
        );
    }
}

export default Products;
