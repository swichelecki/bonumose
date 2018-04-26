import React, { Component } from 'react';
import 'normalize.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Products from './components/Products';
import Natural from './components/Natural';
import Affordable from './components/Affordable';
import Functional from './components/Functional';
import Company from './components/Company';
import News from './components/News';
import Employment from './components/Employment';
import NewsPost from './components/NewsPost';
import Admin from './components/Admin';
import './css/quill.css';
import './css/app.css';
import './css/header.css';
import './css/footer.css';
import './css/body.css';
import './css/products.css';
import './css/natural.css';
import './css/affordable.css';
import './css/functional.css';
import './css/company.css';
import './css/news.css';
import './css/admin.css';
import './images/psicose.png';
import './images/tagatose.png';
import './images/2000/apples_2000_1.jpg';
import './images/2000/apples_2000_no_blur.jpg';
import './images/2000/cookies_2000_1.jpg';
import './images/2000/corn_2000_1.jpg';
import './images/2000/money_2000_1.jpg';
import './images/2000/sugar_2000_1.jpg';
import './images/500/1000_900_cookies.jpg';
import './images/500/1000_900_healthy.jpg';
import './images/500/1000_900_icecream.jpg';
import './images/500/1000_900_money.jpg';
import './images/400/800_1000_cookies.jpg';
import './images/400/800_1000_corn.jpg';
import './images/400/800_1000_healthy.jpg';
import './images/400/800_1000_icecream.jpg';
import './images/400/800_1000_money.jpg';
import './images/400/800_1000_potatoes.jpg';
import './images/400/1210_apples.jpg';
import './images/400/1210_allulose.jpg';
import './images/400/1210_tagatose.jpg';
import './images/400/1210_exercise.jpg';
import './images/400/1210_corn.jpg';
import './images/400/1210_potatoes.jpg';
import './images/400/1210_money.jpg';
import './images/400/1210_cookies.jpg';
import './images/400/1210_icecream.jpg';
import './images/500/846_280_healthy.jpg';
import './images/500/846_280_icecream.jpg';
import './images/500/846_280_money.jpg';
import './images/500/846_280_cookies.jpg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          location: '/'
      };
    }

   /*
    * @desc hides Header and Footer when Admin path is loaded
    */

    componentDidMount() {

        let path = window.location.href;
        let pathShort = String(path).slice(-6);
        this.setState({location: pathShort});
    }

    render() {
        const { location } = this.state;
        return(
          <Router>
            <div>
                <div>
                  {
                    location !== '/admin' &&
                    <Header />
                  }
                </div>
                <Switch>
                  <Route exact path="/" component={Body} />
                  <Route path="/products" component={Products} />
                  <Route path="/naturally-occurring" component={Natural}/>
                  <Route path="/affordable" component={Affordable}/>
                  <Route path="/functional" component={Functional}/>
                  <Route path="/company" component={Company}/>
                  <Route path="/news" component={News}/>
                  <Route path="/employment/:id" component={Employment}/>
                  <Route path="/post/:id" component={NewsPost}/>
                  <Route path="/admin" component={Admin}/>
                  <Route render={() => <p>404 Page Not Found</p>}/>
                </Switch>
                <div>
                  {
                    location !== '/admin' &&
                    <Footer />
                  }
                </div>
            </div>
          </Router>
        );

    }

}

export default App;
