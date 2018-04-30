import React, { Component } from 'react';
import * as firebase from 'firebase';
import _ from 'lodash';

class Employment extends Component {
    constructor(props) {
      super(props);
      this.showJob = this.showJob.bind(this);

      this.state = {
        jobsArray: [{}],
        newJobsArray: [{}],
        urlParam: this.props.match.params.id
      };
    }

   /*
    * @desc checks if new url param == current url param and updates state accordingly
    */

    componentWillReceiveProps(nextProps) {

      const newSearchTerm = nextProps.match.params.id
        if(this.state.urlParam !== newSearchTerm) {
          this.setState(() => ({ urlParam: newSearchTerm }))
        }

    }

   /*
    * @desc brings Firebase data into app and watches for changes
    */

    componentDidMount() {

      let app = firebase.database().ref('jobs');
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
         jobsArray: jobs
       }, this.showJob);

    }

   /*
    * @desc matches url param with key/value in object and loads that index
    */

    showJob() {

      let urlParam = this.state.urlParam;
      let path = '/employment/' + urlParam;
      let jobs = this.state.jobsArray;

        for (var i = 0; i < jobs.length; i++) {

          if (path == jobs[i].url) {

            this.setState({
              newJobsArray: jobs[i]
            });

          }

        }

    }

   /*
    * @desc disconnects app from Firebase table when route changes
    */

    componentWillUnmount() {
      let app = firebase.database().ref('jobs');
      app.off();
    }

    render() {

      const subject = (this.state.newJobsArray.header);

        return(
          <div>
            <div className="container company-bottom-margin">
              <p className="company-text-header">
                {this.state.newJobsArray.header}
              </p>
              <p className="news-date-posted">
                {this.state.newJobsArray.date}
              </p>
              <p className="job-body-text-container" dangerouslySetInnerHTML={{__html: this.state.newJobsArray.job}}>
              </p>
              <div className="apply-now-wrapper">
                <a className="apply-button-a" href={`mailto:erogers@bonumose.com?subject=Bonumose%20Job%20Application:%20${subject}&body=Please%20attach%20your%20resume%20and%20cover%20letter.`}>
                  <button className="apply-button">
                    Apply Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
    }
}

export default Employment;
