import React from 'react'

import classes from './Register.css'
import { Link } from 'react-router-dom'

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        email:''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    submitForm = (e) => {
        e.preventDefault()
        const data = this.state;
        console.log('Submited')
        document.getElementsByClassName(classes.Invisible)[0].style.display = "block";
    }

    render() {
        return (
            <div className={classes.Login}>
                <form onSubmit={this.submitForm} className={classes.LoginForm}>
                    <h1>Register</h1>
                        <div className={classes.Inputs}>
                            <label>
                                Username
                            </label>
                                <input  name="username" 
                                        value={this.state.username} 
                                        onChange={this.onChange} 
                                        type="text" 
                                        placeholder="Unesite username" 
                                        className={classes.Username}
                            />  
                            <label>
                                Password
                            </label>
                                <input  name="password" 
                                        value={this.state.password} 
                                        onChange={this.onChange}  
                                        type="password" 
                                        placeholder="Unesite password" 
                                        className={classes.Password}
                                />
                            <label>
                                Email address
                            </label>
                                <input  name="email" 
                                        value={this.state.email} 
                                        onChange={this.onChange} 
                                        type="email" 
                                        placeholder="Unesite email" 
                                        className={classes.Email}
                                />
                        </div>
                    <button type="submit" className={classes.Button}>
                        Register
                    </button>
                    <p className={classes.Invisible}>Registered, Go to Login</p>
                    <hr />
                    <p className={classes.Text}>Already regstered. Go to Login</p>
                    <Link to="/">
                        <button className={classes.Button}>
                            Login
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default Register;