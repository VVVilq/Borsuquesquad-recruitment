import React, { Component } from 'react';
import firebase from '../../Firebase/firebase';
import '../../styles/Styles.scss';

class Register extends Component {
  state = {
    login: ``,
    password: ``,
    email: ``,
    exception: null
  }

  changeState = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  registerUser = (e) => {
    e.preventDefault();
    this.setState({
      exception: null
    })

    firebase.register(this.state.login, this.state.email, this.state.password).then(() => {
      this.props.history.push('/')
    }).catch((e) => {
      this.setState({
        exception: e.message
      })
    })
  }




  render() {
    const exception = this.state.exception ? (<div><p>{this.state.exception}</p></div>) : null
    return (
      <div id="registration">
        <form action="">
          <label htmlFor="login">pass login:</label>
          <input type="text" id="login" onChange={this.changeState} />
          <label htmlFor="password">pass password:</label>
          <input type="text" id="password" onChange={this.changeState} />
          <label htmlFor="email">email</label>
          <input type="text" id="email" onChange={this.changeState} />
          <button onClick={this.registerUser}>Sign up</button>
        </form>
        {exception}
      </div>
    )
  }
}

export default Register;