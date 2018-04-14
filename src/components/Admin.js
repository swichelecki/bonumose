import React, { Component } from 'react';
import AdminNews from './AdminNews';
import AdminJobs from './AdminJobs';
import * as firebase from 'firebase';

class Admin extends Component {
    constructor() {
      super();
      this.showHideTab = this.showHideTab.bind(this);
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.onChange = this.onChange.bind(this);
      this.onChangeCallback = this.onChangeCallback.bind(this);
      this.refreshedPageUserName = this.refreshedPageUserName.bind(this);

      this.state = {
        user: '',
        password: ''
      };

    }

   /*
    * @desc called from componentDidMount to fill user name in header on page refresh
    */

    refreshedPageUserName(firebaseUser) {

      let userName = String(firebaseUser['email']);

      this.setState({
        user: userName
      });
    }

   /*
    * @desc persistent firebaseUser object keeps UI correct after page refresh
    */

    componentDidMount(){

    const auth = firebase.auth();
    const promise = auth.onAuthStateChanged(firebaseUser => {

    let loginTab = document.getElementById('one');
    let loginMessage = document.getElementById('logged-in-message');
    let showTabs = document.querySelectorAll('li.login');
    let newsTab = document.getElementById('two');

    if (firebaseUser) {

      loginTab.style.display = 'none';
      loginMessage.style.display = 'block';
      newsTab.style.display = 'block';
      showTabs.forEach(tab => {
          tab.style.display = 'inline';
      });
      this.refreshedPageUserName(firebaseUser);

    } else {

      loginMessage.style.display = "none";
      showTabs.forEach(tab => {
          tab.style.display = 'none';
      });
    }

    });

    }

   /*
    * @desc shows or hides tabs on click event
    */

    showHideTab(number){

      let tabs = document.getElementsByClassName('tab');
      let firstTab = document.getElementById('one');

      for (var i = 0; i < tabs.length; i++) {
          tabs[i].style.display = 'none';
      }

      document.getElementById(number).style.display = 'block';

    }

   /*
    * @desc updates state via sign-in form text inputs
    */

    onChange(event) {

      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      }, this.onChangeCallback);

    }

   /*
    * @desc called by onChange to keep state in sync
    */

    onChangeCallback() {

    }

   /*
    * @desc logs user into Firebase and displays tabs
    */

    login(event) {

      event.preventDefault();
      let loginMessage = document.getElementById('logged-in-message');
      let showTabs = document.querySelectorAll('li.login');
      let loginTab = document.getElementById('one');
      let newsTab = document.getElementById('two');

      let user = this.state.user;
      let pass = this.state.password;

      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(user, pass);
      promise.catch(function(error){
        console.log('error' + error);
        alert('Incorrect user name or password!');
      });

      auth.onAuthStateChanged(function(user) {

        if (user) {

          loginMessage.style.display = 'block';
          loginTab.style.display = 'none';
          newsTab.style.display = 'block';
          showTabs.forEach(tab => {
            tab.style.display = 'inline';
          });

        }

      });

      this.setState({
        user: '',
        password: ''
      });

    }

   /*
    * @desc logs user out from Firebase and hides tabs
    */

    logout() {

      let loginMessage = document.getElementById('logged-in-message');
      let showTabs = document.querySelectorAll('li.login');
      let loginTab = document.getElementById('one');
      let newsLoginTab = document.getElementById('two');

      firebase.auth().signOut().then(function(){

        loginMessage.style.display = "none";
        newsLoginTab.style.display = "none";
        loginTab.style.display = 'block';
        showTabs.forEach(tab => {
            tab.style.display = 'none';
        });

      });

      this.setState({
        user: '',
        password: ''
      });

    }

    render() {

        return(
          <div>
          <div className="admin-header">
            <h1>Bonumose CMS</h1>
            <p id="logged-in-message">You are logged in as <strong>{this.state.user}</strong>. <button onClick={this.logout}>Log out</button></p>
          </div>
          <div className="container">
            <ul className="admin-ul">
              <li onClick={() => this.showHideTab('two')} className="login">News</li>
              <li onClick={() => this.showHideTab('three')} className="login">Jobs</li>
            </ul>
            <div id="one">
              <div className="absolute-center">
                <form className="login-form" onSubmit={this.login}>
                    <input className="login-input" type="text" name="user" placeholder="user name" value={this.state.user} onChange={this.onChange}/>
                    <input className="login-input" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
                    <input className="login-submit" type="submit" value="Log in"/>
                </form>
              </div>
            </div>
            <div id="two" className="tab">
              <AdminNews />
            </div>
            <div id="three" className="tab">
              <AdminJobs />
            </div>
          </div>
          </div>
        );
    }
}

export default Admin;
