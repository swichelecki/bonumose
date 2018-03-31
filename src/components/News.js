import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NewsSection from './NewsSection';
import JobsSection from './JobsSection';

class News extends Component {
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
            <div id="news-header-image">
            </div>
            <div className="container company-bottom-margin">
              <p className="company-text-header">
                News
              </p>
              <NewsSection />
              <p id="employment" className="company-text-header">
                Employment Opportunities
              </p>
              <JobsSection />
            </div>
          </div>
        );
    }
}

export default News;
