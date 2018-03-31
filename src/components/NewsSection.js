import React, { Component } from 'react';
import * as firebase from 'firebase';
import _ from 'lodash';

class NewsSection extends Component {
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

    render() {
        let newsItem;
        if (this.state.newsArray) {
            newsItem = this.state.newsArray.slice(0).reverse().map((news, index) => {

              return(
                <div id="news-container-top" key={index}>
                  <h2 className="news-header">{news.header}</h2>
                  <p className="news-date-posted">{news.date}</p>
                    <p className="news-body-text-container" dangerouslySetInnerHTML={{__html: news.text}}>
                    </p>
                    &nbsp;<span className="anchor-underline"><a className="news-anchor" href={news.url} target="_blank">Read More <i className="fa fa-angle-right"></i></a></span>
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

export default NewsSection;
