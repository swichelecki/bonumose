import React, { Component } from 'react';

class AdminJobs extends Component {
    constructor() {
      super();
      this.state = {
          header: '',
          text: '',
          link: '',
          date: '',
          key: '',
          display: '',
          jobsArray: []
      };
    }

    render() {

        return(
          <div>
            THIS IS ADMIN JOBS COMPONENT!
          </div>
        );
    }
}

export default AdminJobs;
