import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import * as firebase from 'firebase';
import _ from 'lodash';

class News extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newsArray: []
      };

    }

   /*
    * @desc brings Firebase data into app and watches for changes
    */

    componentDidMount() {
      let app = firebase.database().ref('news');
      app.on('value', snapshot => {
        this.getData(snapshot.val());
      });
    }

   /*
    * @desc converts Firebase data into a form that can be used with map()
    */

    getData(values) {
      let newsValues = values;
      let news = _(newsValues).keys()
                              .map(newsKey => {
                                let cloned = _.clone(newsValues[newsKey]);
                                cloned.key = newsKey;
                                return cloned;
                              })
                              .value();
      this.setState({
        newsArray: news
      });

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
              <NewsSection newsArray={this.state.newsArray}/>
              <p id="employment" className="company-text-header">
                Employment Opportunities
              </p>
              <EmploymentSection />
            </div>
          </div>
        );
    }
}

class NewsSection extends Component {

    render() {
        let newsItem;
        if (this.props.newsArray) {
            newsItem = this.props.newsArray.slice(0).reverse().map((news, index) => {

              return(
                <div id="news-container-top" key={index}>
                  <h2 className="news-header">{news.header}</h2>
                  <p className="news-date-posted">{news.date}</p>
                    <div className="news-body-text-container" dangerouslySetInnerHTML={{__html: news.text}}>
                    </div>
                    <span className="anchor-underline"><a className="news-anchor" href={news.url} target="_blank">Read More <i className="fa fa-angle-right"></i></a></span>
                </div>
              );

            });
        }

        return(
          <div>
            {newsItem}
          </div>
        );

    }

}

class EmploymentSection extends Component {

    render() {

        return(
          <div id="news-container">
            <h2 className="news-header">Lorem Ipsum Dolor Lorem Ipsum Dolor</h2>
            <p className="news-date-posted">March 26, 2018</p>
            <div className="news-body-text-container">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              <span className="anchor-underline"><a className="news-anchor" href="#" target="_blank">Read More <i className="fa fa-angle-right"></i></a></span>
            </div>
          </div>
        );

    }

}

export default News;
