import React, { Component } from 'react';
import firebase from './Firebase/firebase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Browse from './components/Browse';
import LogIn from './components/Authenticaton/LogIn';
import Register from './components/Authenticaton/Register';
import Movie from './components/Movie';



class App extends Component {

  state = {
      user: {}
  }
 
  componentDidMount() {
    this.loggingListener();
  }


  loggingListener() {
    firebase.authenticationListener(this)
  }

  signout = () => {
    firebase.logout().then(() => {

    })
  }

  showUsers = () => {
    console.log(this.state.user)
  }

  render() {
    const currentNav = this.state.user ? (
      <div id="navigation-bar">
        <Navbar userLogged={true} signout={this.signout} />
        <Switch>
          <Route exact path='/' component={Browse} />
          <Route path='/about' component={About} />
          <Route path='/movies/:movie_id' component={Movie} />
        </Switch>
      </div>) : (
        <div id="navigation-bar">
          <Navbar userLogged={false} />
          <Route exact path='/' component={LogIn} />
          <Route path='/signup' component={Register} />
        </div>)

    return (
      <div className='container'>
        <BrowserRouter>
          {currentNav}
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
