import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/SignIn'
import Register from './components/Register'
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import NewsFeedPage from './components/NewsFeedPage'
import Footer from './components/Footer'
import New from './components/New'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import NNewPage from './components/NewsFeedPage'
import Messages from './components/Messages'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <NavBar /> */}
      <Route path="/signin" component={SignIn} />
      <Route path="/register" component={Register} />
      <Route path='/profile/:userId' exact component={App}></Route>
      <Route path='/home/' exact component={NewsFeedPage}></Route>
      {/* <Route path='/NetworkP' exact component={NetworkP}></Route> */}
      <Route path="/messages" exact component={Messages}></Route>
      <Route path="/new" exact component={New} />
    </Router>
    {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();