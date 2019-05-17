import React, { Component } from 'react';
import firebase from './Firebase/firebase'

import './App.css';
import LogIn from './Authenticaton/LogIn';
import Register from './Authenticaton/Register';



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

    return (
      <div>
        
        <button onClick={this.signout}>logg out</button>
        <button onClick={this.showUsers}>show Users</button>

        <LogIn />
        <Register />       

        {this.state.user ? (<div>Witaj {this.state.user.displayName}</div>) : (<div>Niezalogowany</div>)}  
      </div>

    )
  }
}

export default App;
