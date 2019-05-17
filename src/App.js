import React, { Component } from 'react';
import firebase from './Firebase/firebase'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Browse from './components/Browse';
import LogIn from './components/Authenticaton/LogIn';
import Register from './components/Authenticaton/Register';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
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
    const currentNav = this.state.user?(
      <div>
        <Navbar userLogged={true} signout={this.signout}/>
        <Route exact path='/' component={About} />
        <Route path='/browse' component={Browse} />      
      </div>):(
      <div>
      <Navbar userLogged={false} />
        <Route exact path='/' component={LogIn} />
        <Route path='/signup' component={Register} /> 
      </div>)

    return (
      <BrowserRouter>
        {currentNav}
      </BrowserRouter>
    )
  }
}

export default App;
