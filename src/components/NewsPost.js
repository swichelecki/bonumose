import React, { Component } from 'react';
import * as firebase from 'firebase';
import _ from 'lodash';

class NewsPost extends Component {
    constructor(props) {
      super(props);
      this.showJob = this.showJob.bind(this);

      this.state = {
        newsArray: [{}],
        newNewsArray: [{}],
        urlParam: this.props.match.params.id
      };
    }

   /*
    * @desc checks if new url param == current url param and updates state accordingly
    */

    componentWillReceiveProps(nextProps) {

      const SearchTerm = nextProps.match.params.id
        if(this.state.urlParam !== SearchTerm) {
          this.setState(() => ({ urlParam: SearchTerm }))
        }

    }

   /*
    * @desc brings Firebase data into app and watches for changes
    */

    componentDidMount() {

      let app = firebase.database().ref('news');
      app.on('value', snapshot => {
        this.getData(snapshot.val());
      });

      window.scrollTo(0,0);

    }

   /*
    * @desc converts Firebase data into a form the can be used with map()
    */

    getData(values) {
       let jobValues = values;
       let jobs = _(jobValues).keys()
                              .map(jobKey => {
                                let cloned = _.clone(jobValues[jobKey]);
                                cloned.key = jobKey;
                                return cloned;
                              })
                              .value();
       this.setState({
         newsArray: jobs
       }, this.showJob);

    }

   /*
    * @desc matches url param with key/value in object and loads that index
    */

    showJob() {

      let urlParam = this.state.urlParam;
      let path = '/post/' + urlParam;
      let news = this.state.newsArray;

        for (var i = 0; i < news.length; i++) {

          if (path == news[i].url) {

            this.setState({
              newNewsArray: news[i]
            });

          }

        }

    }

   /*
    * @desc disconnects app from Firebase table when route changes
    */

    componentWillUnmount() {
       let app = firebase.database().ref('news');
       app.off();
    }

    render() {

        return(
          <div>
            <div className="container company-bottom-margin">
              <p className="company-text-header">
                {this.state.newNewsArray.header}
              </p>
              <p className="news-date-posted">
                {this.state.newNewsArray.date}
              </p>
              <p className="job-body-text-container" dangerouslySetInnerHTML={{__html: this.state.newNewsArray.post}}>
              </p>
            </div>
          </div>
        );
    }
}

export default NewsPost;
