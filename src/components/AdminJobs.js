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
      this.openCloseForm = this.openCloseForm.bind(this);
      this.editJobPost = this.editJobPost.bind(this);
      this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
      this.state = {
          header: '',
          text: '',
          url: '',
          date: '',
          key: '',
          display: 'none',
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

      let jobObject = this.state;
      delete jobObject.jobsArray

      jobsCreate.update(jobObject);

      this.setState({
        header: '',
        text: '',
        url: '',
        date: ''
      });

      window.scrollTo(0,0);

    }

   /*
    * @desc shows and hides forms based on display value
    */

    openCloseForm() {

       if (this.state.display === 'none') {
          this.setState({
            display: 'block'
          });
       } else {
         this.setState({
           display: 'none',
           header: '',
           date: '',
           text: '',
           url: '',
           key: ''
         });
       }

       window.scrollTo(0,0);
    }

   /*
    * @desc fills state with values of job post that is to be edited
    */

    editJobPost(header, date, text, url, key) {

        this.setState({
          header: header,
          date: date,
          text: text,
          url: url,
          key: key
        });
    }

   /*
    * @desc updates database record for edited job post
    */

    handleEditFormSubmit(event) {

      event.preventDefault();

      let editedJobsObject = this.state;
      delete editedJobsObject.jobsArray;

      let key = editedJobsObject.key;

      let jobPostToUpdate = firebase.database().ref().child('jobs').child(key);

      jobPostToUpdate.once('value', function(snapshot){

          if(snapshot.val() === null) {
            alert('Item does not exist');
          } else {
            jobPostToUpdate.update(editedJobsObject);
          }
      });

      this.setState({
        header: '',
        date: '',
        text: '',
        url: '',
        key: '',
        display: 'none'

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
            displayProp={this.state.display}
            />
            <EditJobForm
            onFormChange={this.handleFormChange}
            onQuillChange={this.handleQuillChange}
            formValue={this.state}
            onFormSubmit={this.handleEditFormSubmit}
            cancelEdit={this.openCloseForm}
            displayProp={this.state.display}
            />
            <h2 className="admin-manage">Manage Job Postings</h2>
            <ManageJobs
            jobsObject={this.state.jobsArray}
            deleteJobItem={this.confirmDelete}
            editJob={this.editJobPost}
            openForm={this.openCloseForm}
            />
          </div>
        );
    }
}

class JobsForm extends Component {

    render() {

      const displayValue = this.props.displayProp;

      let formDisplay = null;

      formDisplay = (displayValue == 'none') ? formDisplay = 'block' : formDisplay = 'none';

      const displayStyle = {display: formDisplay};

        return(
          <div style={displayStyle}>
            <form onSubmit={this.props.onFormSubmit}>
              <h2>Add Job Posting</h2>
              <label>Header:<br/>
                <input className="input-header" type="text" name="header" value={this.props.formValue.header} onChange={this.props.onFormChange}/>
              </label>
              <label>Text:<br/>
                <ReactQuill value={this.props.formValue.text} onChange={this.props.onQuillChange}/>
              </label>
              <label>Read More URL:<br/>
                <input className="input-url" type="text" name="url" value={this.props.formValue.url} onChange={this.props.onFormChange}/>
              </label>
                <input type="submit" value="Submit"/>
            </form>
          </div>
        );
    }
}

class EditJobForm extends Component {

    render() {

        const displayValue = this.props.displayProp;
        const displayStyle = {display: displayValue};

        return(
          <div style={displayStyle}>
            <form onSubmit={this.props.onFormSubmit}>
              <h2>Edit Job Posting</h2>
              <label>Header:<br/>
                <input className="input-header" type="text" name="header" value={this.props.formValue.header} onChange={this.props.onFormChange}/>
              </label>
              <label>Text:<br/>
                <ReactQuill value={this.props.formValue.text} onChange={this.props.onQuillChange}/>
              </label>
              <label>Read More URL:<br/>
                <input className="input-url" type="text" name="url" value={this.props.formValue.url} onChange={this.props.onFormChange}/>
              </label>
              <input type="submit" value="Submit"/>
            </form>
              <button className="cancel-button" onClick={this.props.cancelEdit}>Cancel</button>
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
                <button onClick={() => {this.props.editJob(job.header, job.date, job.text, job.url, job.key); this.props.openForm()}}>Edit</button>
                <button onClick={() => this.props.deleteJobItem(job.key)}>Delete</button>
              </div>
            );

          });
      }

        return(
          <div className="admin-bottom-padding">{jobItem}</div>
        );
    }
}

export default AdminJobs;
