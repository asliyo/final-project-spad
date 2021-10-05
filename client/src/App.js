import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignupNew from './pages/SignupNew';
import Personnels from './pages/Personnels';
import Dashboard from './pages/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }
  componentDidMount() {
    this.loginStatus()
  }
  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
          localStorage.setItem('uid', (response.data.user.id));
          const uid = localStorage.getItem('uid');
          console.log(uid)
          //store user.id as uidd
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  handleLogoutClick(){
    this.props.handleLogout();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact path='/'
              render={props => (
                <Home {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            <Route
              exact path='/login'
              render={props => (
                <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            <Route
              exact path='/signup'
              render={props => (
                <SignupNew {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            <Route
              exact path='/dashboard'
              render={props => (
                <Dashboard {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            {/* <PrivateRoute 
              path="/dashboard" 
              component={Dashboard}
            /> */}
            <Route 
              exact path="/personnels" 
              render={() => (
              <Personnels/>
            )}/>
            <Route exact path="/logout">
              { this.props.isLoggedIn ? <Redirect to="/"/> : <Home /> }
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;