import React, { Component } from 'react';
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
                &nbsp;<span className="anchor-underline"><a className="news-anchor" href={job.url} target="_blank">Read More <i className="fa fa-angle-right"></i></a></span>
              </div>
            );

          });
      }

            return(
              <div>{jobItem}</div>
            );

    }

}

export default JobsSection;
