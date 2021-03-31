import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Extra from "../../Extra/Extra";
import Home from "../../Home/Home";
import Navigation from '../../Navigation/Navigation';
import NotFound from "../../NotFound/NotFound";
import Profile from "../../Profile/Profile";
class Main extends React.Component {
  
  render() {
    if (!this.props.auth.isAuthenticated) return <Redirect to="/login" />;
    return (
      <div
            id="twitter_clone"
            className="container mx-4 lg:flex h-screen py-6"
          >
        <Navigation user={this.state.user}/>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile/hrrarya" render={props=> <Profile {...props}/> } />
            <Route component={NotFound}/>
        </Switch>
        <Extra />
      </div>
    );
  }
}

export default Main;
