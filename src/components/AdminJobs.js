import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import * as firebase from 'firebase';

class AdminJobs extends Component {
    constructor() {
      super();
      this.handleFormChange = this.handleFormChange.bind(this);
      this.formChangeCallback = this.formChangeCallback.bind(this);
      this.handleQuillChange = this.handleQuillChange.bind(this);
      this.setDate = this.setDate.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.confirmDelete = this.confirmDelete.bind(this);
      this.deleteJob = this.deleteJob.bind(this);
      this.state = {
          header: '',
          text: '',
          url: '',
          date: '',
          key: '',
          display: '',
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
    * @desc converts Firebase data into a form that can be used with map()
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
    * @desc sets header and url in state and calls formChangeCallback to keep in sync
    */

    handleFormChange(event) {

      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      }, this.formChangeCallback);
    }

    formChangeCallback() {

    }

   /*
    * @desc sets Quill value to this.state.text
    */

    handleQuillChange(value) {

      this.setState({
        text: value
      });

    }

   /*
    * @desc sets this.state.date and calls handleFormSubmit as callback
    */

    setDate(event) {

      event.preventDefault();

      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth()+1;
      let yyyy = today.getFullYear();

      let month;
      switch(mm) {
        case 1:
          month = 'January';
          break;
        case 2:
          month = 'February';
          break;
        case 3:
          month = 'March';
          break;
        case 4:
          month = 'April';
          break;
        case 5:
          month = 'May';
          break;
        case 6:
          month = 'June';
          break;
        case 7:
          month = 'July';
          break;
        case 8:
          month = 'August';
          break;
        case 9:
          month = 'September';
          break;
        case 10:
          month = 'October';
          break;
        case 11:
          month = 'November';
          break;
        case 12:
          month = 'December';
          break;
        default:
          month = 'not a month';

          return month;
      }

      today = month + ' ' + dd + ', ' + yyyy;

      this.setState({
        date: today
      }, this.handleFormSubmit);

    }

   /*
    * @desc sends state data to Firebase and then resets state
    */

    handleFormSubmit(event) {

      let jobsDatabaseRef = firebase.database().ref('jobs');
      let jobsCreate = jobsDatabaseRef.push();

      jobsCreate.update(this.state);

      this.setState({
        header: '',
        text: '',
        url: '',
        date: ''
      });

      window.scrollTo(0,0);

    }

   /*
    * @desc asks user to confirm delete action
    */

    confirmDelete(key) {

      let confirmDelete = confirm('Are you sure you want to delete this?');

      if (confirmDelete == true) {
          this.deleteJob(key);
      }

    }

   /*
    * @desc deletes record from Firebase based on key value
    */

    deleteJob(key) {

      let app = firebase.database().ref('jobs');
      app.child(key).remove();

    }

    render() {

        return(
          <div>
            <JobsForm
            onFormChange={this.handleFormChange}
            onQuillChange={this.handleQuillChange}
            formValue={this.state}
            onFormSubmit={this.setDate}
            />
            <h2>Manage Job Postings</h2>
            <ManageJobs
            jobsObject={this.state.jobsArray}
            deleteJobItem={this.confirmDelete}
            />
          </div>
        );
    }
}

class JobsForm extends Component {

    render() {

        return(
          <div>
            <form onSubmit={this.props.onFormSubmit}>
              <h2>Add Job Posting</h2>
              <label>Header:<br/>
                <input type="text" name="header" value={this.props.formValue.header} onChange={this.props.onFormChange}/>
              </label>
              <label>Text:<br/>
                <ReactQuill value={this.props.formValue.text} onChange={this.props.onQuillChange}/>
              </label>
              <label>
                <input type="text" name="url" value={this.props.formValue.url} onChange={this.props.onFormChange}/>
              </label>
                <input type="submit" value="Submit"/>
            </form>
          </div>
        );
    }
}

class ManageJobs extends Component {

    render() {
      let jobItem;
      if (this.props.jobsObject) {
          jobItem = this.props.jobsObject.slice(0).reverse().map((job, index) => {

            return(
              <div key={index}>
                <h3>{job.header}</h3>
                <button>Edit</button>
                <button onClick={() => this.props.deleteJobItem(job.key)}>Delete</button>
              </div>
            );

          });
      }

        return(
          <div>{jobItem}</div>
        );
    }
}

export default AdminJobs;
