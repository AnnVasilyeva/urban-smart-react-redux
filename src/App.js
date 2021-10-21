import React, {Component} from 'react';
import './App.css';
import Form from './components/Form/Form';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from "react-redux";


class App extends Component {
  getProfilePage = (history) => {
    history.push('/profile');
  }

  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={props => <Form {...props} getProfilePage={this.getProfilePage}/>}/>
          <Route exact path="/profile" render={props => <Profile {...props} login={this.props.login}/>}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {login: state.login}
}

export default connect(mapStateToProps)(App);

