import React, { Component } from 'react';
import firebase from '../../Firebase/firebase';
import '../../styles/Styles.scss';

class PasswordRecovery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message:`Type your email`,
            email: ``,
            password: ``,
            exception: null
        }
    }


    changeState = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    sendResetEmail=(e)=>{
        e.preventDefault();
        firebase.passwordResetEmail(this.state.email).then(()=>{
            this.setState({
                message: `email has been send`
              })
        }).catch((e) => {
            this.setState({
              exception: e.message
            })
          })
    }

    render() {
        const exception = this.state.exception ? (<div><p id ="error">{this.state.exception}</p></div>) : null
        return (
            <div id="registration">
                <p>{this.state.message}</p>
                <form action="">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" onChange={this.changeState} />
                    
                    <button onClick={this.sendResetEmail}>Send Email</button>
                </form>
                
                {exception}
            </div>
        )
    }
}

export default PasswordRecovery;