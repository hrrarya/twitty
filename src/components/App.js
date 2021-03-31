import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AuthedRoute from './Authed/authed';
import Extra from "./Extra/Extra";
import Home from './Home/Home';
import Navigation from "./Navigation/Navigation";
import NotFound from "./NotFound/NotFound";
import Login from "./pages/login/login";
import Profile from './Profile/Profile';
import Registration from './Registration/Registration';

class App extends Component {
  state = {
    user: {},
    isAutheticated: false,
  };
  componentDidMount() {
    this.setState({
      user: this.props.auth.user,
      isAutheticated: Object.keys(this.props.auth.user).length !== 0
    });
  }

  render() {
    const {isAutheticated} = this.state;
    return (
      <div id="twitter_clone" className="container mx-4 lg:flex h-screen py-6">
        {isAutheticated && <Navigation user={this.state.user} />}
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Registration}/>
          <AuthedRoute authed={isAutheticated} path="/profile/:username" component={Profile}/>
          <AuthedRoute authed={isAutheticated} path="/" exact component={Home}/>
          <Route component={NotFound} />
        </Switch>
        {isAutheticated && <Extra />}
      </div>
    );
  }
}
const mapstate = (state) => ({
  auth: state.auth,
});

export default connect(mapstate)(App);
