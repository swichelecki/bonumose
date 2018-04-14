import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Company extends Component {
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
          {/*<div id="company-header-image">
          </div>*/}
          <div className="container company-bottom-margin">
            <p className="company-text-header">
              Bonumose Overview
            </p>
            <p>
            We created Bonumose as a new company in 2016 for the purpose of commercializing Dr. Daniel Wichelecki’s enzymatic technology breakthrough for the production of affordable, delicious, healthy tagatose. Since then, Bonumose has developed methods for producing affordable allulose, too, as well as other good-for-you sugars.
            </p>
            <p>
            Bonumose’s vision is to earn a place among the world’s most trusted food ingredient manufacturers. With a mindset of business as a moral imperative, Bonumose’s purpose includes:
            </p>
            <ol className="company-ol">
              <li>Producing food ingredients people love to eat.</li>

              <li>Helping alleviate suffering from global epidemics of diabetes, obesity, tooth decay, and other health issues, without asking consumers to sacrifice taste or their pocketbook.</li>

              <li>Hiring individuals in positions of productive labor, thereby enabling them to feed themselves and their families through the dignity of meaningful, productive work; and</li>

              <li>Creating wealth for owners, customers, employees, suppliers, and other business partners.</li>
            </ol>
            <p className="company-text-header">
              Research & Development
            </p>
            <p>
            We believe entrepreneurs must have a focus angel and a vision angel (in the shoulder angel sense). Focus is necessary, but not sufficient. Vision for new opportunities also is essential.
            </p>
            <p>
            At Bonumose, we currently are focused on scaling up tagatose and allulose to commercial production levels. But we also are expanding our portfolio of good-for-you sugars and functional food ingredients.
            </p>
            <p>
            In addition to building innovative enzymatic pathways for production of our own ingredients, we sometimes use our enzyme discovery and enzymatic pathway design abilities in collaboration with third-party strategic partners. In so doing, we use naturally-occurring, non-GMO enzymes.
            </p>
            <p id="team" className="company-text-header">
              Our Team
            </p>
            <p>
            Ed Rogers, Chief Executive Officer and Co-Founder. Mr. Rogers has more than 25 years of entrepreneurial business experience as a founder, investor, adviser and lawyer. Before co-founding Bonumose, he practiced law for 11 years, co-founded an animal food technology company based on university technology, and designed/implemented a grant-funded venture investment endowment for a foundation in rural Virginia. He has Bachelor of Arts and Juris Doctor degrees from the University of Virginia. Here’s <span className="anchor-underline"><a href="https://www.linkedin.com/in/edwinorogers/" target="_blank">Mr. Rogers’ LinkedIn profile</a></span>.
            </p>
            <p>
            Daniel Wichelecki, PhD, Chief Scientific Officer and Co-Founder. Dr. Wichelecki is the inventor of Bonumose’s novel enzymatic pathway for low-cost tagatose production, as well as the processes for our growing portfolio of additional, affordable #goodsugars. He also has rare expertise at discovering natural enzymes to perform desired functions. Dr. Wichelecki has degrees from the University of Illinois at Urbana-Champaign (BS, Molecular and Cellular Biology; PhD, Biochemistry). Here’s <span className="anchor-underline"><a href="https://www.linkedin.com/in/dan-wichelecki-aaa78276/" target="_blank">Dr. Wichelecki’s LinkedIn profile</a></span>.
            </p>
          </div>
          </div>
        );
    }
}

export default Company;
