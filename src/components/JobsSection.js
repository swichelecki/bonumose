import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import _ from 'lodash';

class JobsSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        jobsArray: []
      };

    }

   /*
    * @desc brings Firebase data into app and watches for changes
    */

    componentDidMount() {
      let app = firebase.database().ref('jobs');
      app.on('value', snapshot => {
        this.getData(snapshot.val());
      });
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
        jobsArray: jobs
      });

    }

   /*
    * @desc disconnects app from Firebase table when route changes
    */

    componentWillUnmount() {
      let app = firebase.database().ref('jobs');
      app.off();
    }

    render() {
      let jobItem;
      if (this.state.jobsArray) {
          jobItem = this.state.jobsArray.slice(0).reverse().map((job, index) => {

            return(
              <div id="news-container" key={index}>
                <h2 className="news-header">{job.header}</h2>
                <p className="news-date-posted">{job.date}</p>
                <p className="news-body-text-container" dangerouslySetInnerHTML={{__html: job.text}}>
                </p>
                &nbsp;<span className="anchor-underline"><Link className="news-anchor" to={job.url}>Read More <i className="fa fa-angle-right"></i></Link></span>
              </div>
            );

          });
      } else {
        jobItem = <h2 className="news-header">We are not hiring at this time.</h2>;
      }

            return(
              <div>{jobItem}</div>
            );

    }

}

export default JobsSection;
