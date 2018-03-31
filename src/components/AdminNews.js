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
      this.state = {
          header: '',
          text: '',
          url: '',
          date: '',
          newsArray: []
      };
    }

   /*
    * @desc sets header and url on initial form and calls formChangeCallback to keep in sync
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
    * @desc sets Quill value to this.state.text on initial form
    */

    handleQuillChange(value) {

      this.setState({ text: value });

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
        case 5:
          month = 'May';
        case 6:
          month = 'June';
        case 7:
          month = 'July';
        case 8:
          month = 'August';
        case 9:
          month = 'September';
        case 10:
          month = 'October';
        case 11:
          month = 'November';
        case 12:
          month = 'December';
        default:
          month = 'not a month';

          return month;
      }

      today = month + ' ' + dd + ', ' + yyyy;

      this.setState({date: today},
      this.handleFormSubmit);

    }

   /*
    * @desc sends state data to Firebase and then resets state
    */

    handleFormSubmit(event) {

      var newsDatabaseRef = firebase.database().ref('news');
      var newsCreate = newsDatabaseRef.push();

      newsCreate.update(this.state);

      this.setState({
        header: '',
        text: '',
        url: '',
        date: ''
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
            THIS IS ADMIN NEWS COMPONENT!
            <NewsForm
              onFormChange={this.handleFormChange}
              onQuillChange={this.handleQuillChange}
              onFormSubmit={this.setDate}
              formValue={this.state}
            />
            <h2>Manage News Items</h2>
            <ManageNews newsArray={this.state.newsArray}
              deleteNewsItem={this.confirmDelete}
            />
          </div>
        );
    }
}

class NewsForm extends Component {

    render() {

        return(
          <div>
            <form onSubmit={this.props.onFormSubmit}>
              <h2>Add News Item</h2>
              <label>Header:<br/>
                <input type="text" name="header" value={this.props.formValue.header} onChange={this.props.onFormChange}/>
              </label>
              <label>Text:<br/>
                <ReactQuill value={this.props.formValue.text} onChange={this.props.onQuillChange}/>
              </label>
              <label>Read More URL:<br/>
                <input type="text" name="url" value={this.props.formValue.url} onChange={this.props.onFormChange}/>
              </label>
              <input type="submit" value="Submit"/>
            </form>
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
                <button>Edit</button>
                <button onClick={() => this.props.deleteNewsItem(news.key)}>Delete</button>
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

export default AdminNews;
