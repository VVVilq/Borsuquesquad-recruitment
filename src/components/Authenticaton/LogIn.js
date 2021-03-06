import React, { Component } from 'react';
import firebase from '../../Firebase/firebase'
import { Link } from 'react-router-dom'
import '../../styles/Styles.scss';

class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

    logUserIn = (e) => {
        e.preventDefault();
        this.setState({
            exception: null
        })
        firebase.login(this.state.email, this.state.password).catch((e) => {
            this.setState({
                exception: e.message
            })
        })
    }

    render() {
        const exception = this.state.exception ? (<div><p id ="error">{this.state.exception}</p></div>) : null
        return (
            <div id="registration">
                <form action="">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" onChange={this.changeState} />
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" onChange={this.changeState} />
                    <button onClick={this.logUserIn}>Log In</button>
                </form>
                <Link to={`/recovery`}>
                            <span>forgot your password?</span>
                </Link>
                {exception}
            </div>
        )
    }
}

export default LogIn;