import React, { Component } from 'react';
import AdminNews from './AdminNews';
import AdminJobs from './AdminJobs';

class Admin extends Component {
    constructor() {
      super();
      this.state = {

      };
    }

    render() {

        return(
          <div className="container">
            THIS IS ADMIN COMPONENT!
            <AdminNews />
            <AdminJobs />
          </div>
        );
    }
}

export default Admin;
