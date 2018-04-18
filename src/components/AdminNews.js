import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import * as firebase from 'firebase';

class AdminNews extends Component {
    constructor() {
      super();
      this.handleFormChange = this.handleFormChange.bind(this);
      this.formChangeCallback = this.formChangeCallback.bind(this);
      this.handleQuillChange = this.handleQuillChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.setDate = this.setDate.bind(this);
      this.confirmDelete = this.confirmDelete.bind(this);
      this.deleteNews = this.deleteNews.bind(this);
      this.editNewsItem = this.editNewsItem.bind(this);
      this.openCloseForm = this.openCloseForm.bind(this);
      this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
      this.handleQuillChangePost = this.handleQuillChangePost.bind(this);

      this.state = {
          header: '',
          text: '',
          url: '',
          date: '',
          key: '',
          post: '',
          display: 'none',
          newsArray: []
      };
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

      this.setState({ text: value });

    }

   /*
    * @desc sets Quill value to this.state.post
    */

    handleQuillChangePost(value) {

      this.setState({ post: value });

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

      let url = this.state.url;
      let headerString = this.state.header;

      if (url == '') {

        let headerDashed = headerString.replace(/\s+/g, '-').toLowerCase();

        let urlFinal = '/post/' + headerDashed;

        this.setState({
          date: today,
          url: urlFinal
        });

      } else {

      this.setState({
        date: today
      }, this.handleFormSubmit);

    }

    }

   /*
    * @desc sends state data to Firebase and then resets state
    */

    handleFormSubmit(event) {

      var newsDatabaseRef = firebase.database().ref('news');
      var newsCreate = newsDatabaseRef.push();

      let newsObject = this.state;
      delete newsObject.newsArray;

      newsCreate.update(newsObject);

      this.setState({
        header: '',
        text: '',
        url: '',
        date: '',
        post: ''
      });

      window.scrollTo(0,0);

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

   /*
    * @desc fills state with values of news item that is to be edited
    */

    editNewsItem(header, date, text, url, key, post) {

      this.setState({
        header: header,
        date: date,
        text: text,
        url: url,
        key: key,
        post: post
      });

    }

   /*
    * @desc updates database record for edited news item
    */

    handleEditFormSubmit(event) {

      event.preventDefault();

      let editedNewsObject = this.state;
      delete editedNewsObject.newsArray;

      let key = editedNewsObject.key;

      let newsItemToUpdate = firebase.database().ref().child('news').child(key);

      newsItemToUpdate.once('value', function(snapshot){

        if (snapshot.val() === null) {
            alert('Item does not exist.');
        } else {
            newsItemToUpdate.update(editedNewsObject);
        }

      });

      this.setState({
        header: '',
        date: '',
        text: '',
        url: '',
        key: '',
        post: '',
        display: 'none'
      });

      window.scrollTo(0,0);

    }

   /*
    * @desc shows and hides forms based on display value
    */

    openCloseForm() {

      if (this.state.display == 'none') {
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
            key: '',
            post: ''
          });
      }

      window.scrollTo(0,0);

    }

   /*
    * @desc asks user to confirm delete action
    */

    confirmDelete(key) {

      let deleteNews = confirm('Are you sure you want to delete this?');

      if (deleteNews == true) {
          this.deleteNews(key);
      }

    }

   /*
    * @desc deletes record from Firebase based on key value
    */

    deleteNews(key) {

      let app = firebase.database().ref('news');
      app.child(key).remove();

    }

    render() {

        return(
          <div>
            <NewsForm
              onFormChange={this.handleFormChange}
              onQuillChange={this.handleQuillChange}
              onFormSubmit={this.setDate}
              formValue={this.state}
              displayProp={this.state.display}
              onQuillChangePost={this.handleQuillChangePost}
            />
            <EditNewsForm
              onFormChange={this.handleFormChange}
              onQuillChange={this.handleQuillChange}
              onFormSubmit={this.handleEditFormSubmit}
              editFormValue={this.state}
              cancelEdit={this.openCloseForm}
              displayProp={this.state.display}
              onQuillChangePost={this.handleQuillChangePost}
            />
            <h2 className="admin-manage">Manage News Items</h2>
            <ManageNews newsArray={this.state.newsArray}
              deleteNewsItem={this.confirmDelete}
              editNews={this.editNewsItem}
              openForm={this.openCloseForm}
            />
          </div>
        );
    }
}

class NewsForm extends Component {

    render() {

        const displayValue = this.props.displayProp;

        let formDisplay = null;

        formDisplay = (displayValue == 'none') ? formDisplay = 'block' : formDisplay = 'none';

        const displayStyle = {display: formDisplay}

        return(
          <div style={displayStyle}>
            <form onSubmit={this.props.onFormSubmit}>
              <h2>Add News Item</h2>
              <label>Header:<br/>
                <input className="input-header" type="text" name="header" value={this.props.formValue.header} onChange={this.props.onFormChange}/>
              </label>
              <label>Short Description:<br/>
                <ReactQuill value={this.props.formValue.text} onChange={this.props.onQuillChange}/>
              </label>
              <label>External URL (do not use if news is being added below):<br/>
                <input className="input-url" type="text" name="url" value={this.props.formValue.url} onChange={this.props.onFormChange}/>
              </label>
              <label>Full News Description (use only if no external URL):<br/>
                <ReactQuill value={this.props.formValue.post} onChange={this.props.onQuillChangePost}/>
              </label>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        );
    }
}

class EditNewsForm extends Component {

    render() {

        const displayValue = this.props.displayProp;
        const displayStyle = {display: displayValue}

        return(
          <div style={displayStyle}>
            <form onSubmit={this.props.onFormSubmit}>
              <h2>Edit News Item</h2>
              <label>Header:<br/>
                <input className="input-header" type="text" name="header" value={this.props.editFormValue.header} onChange={this.props.onFormChange}/>
              </label>
              <label>Short Description:<br/>
                <ReactQuill value={this.props.editFormValue.text} onChange={this.props.onQuillChange}/>
              </label>
              <label>External URL (do not use if news is being added below):<br/>
                <input className="input-url" type="text" name="url" value={this.props.editFormValue.url} onChange={this.props.onFormChange}/>
              </label>
              <label>Full News Description (use only if no external URL):<br/>
                <ReactQuill value={this.props.editFormValue.post} onChange={this.props.onQuillChangePost}/>
              </label>
              <input type="submit" value="Submit"/>
            </form>
              <button className="cancel-button" onClick={this.props.cancelEdit}>Cancel</button>
          </div>
        );
    }
}

class ManageNews extends Component {

    render() {
      let newsItem;
      if (this.props.newsArray) {
          newsItem = this.props.newsArray.slice(0).reverse().map((news, index) => {

            return(
              <div key={index}>
                <h3>{news.header}</h3>
                <button onClick={() => {this.props.editNews(news.header, news.date, news.text, news.url, news.key, news.post); this.props.openForm();}}>Edit</button>
                <button onClick={() => this.props.deleteNewsItem(news.key)}>Delete</button>
              </div>
            );
          });
      }

      return(
        <div className="admin-bottom-padding">
        {newsItem}
        </div>
      );

    }

}

export default AdminNews;
