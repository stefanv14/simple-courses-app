import React from 'react'

import classes from './Login.css'
import { Redirect } from 'react-router-dom';
import Dashboard from '../Dasboard/Dashboard';
import Admin from '../Admin/Admin';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        loggedInUser:false,
        loggedInAdmin:false,
        redirectToRegisterPage:false,
        users:[
            {
                username:"admin",
                password:"admin",
                idPart:1
            },
            {
                username:"user",
                password:"user",
                idPart:2
            }
        ]
    }

    componentDidMount() {
        // AXIOS GET METHOD AND SET STATE.USERS WITH RESPONSE DATA
        // async getDataAxios(){
    //     const response =
    //       await axios.get("http://localhost:8083/admin")
    //     console.log(response.data)
    // }
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        const { username, password } = this.state;
        const admin=this.state.users.filter(user =>  username===user.username && 
                                                     password===user.password && 
                                                     user.idPart===1);
        const user=this.state.users.filter(user =>  username===user.username && 
                                                    password===user.password && 
                                                    user.idPart===2);
        if(admin.length===1) {
            this.setState({
                loggedInAdmin:true
            })
        }
        if(user.length===1) {
            this.setState({
                loggedInUser:true
            })
        }
    }
    
    logoutAdmin = () => {
        this.setState({
            loggedInAdmin:false
        }) 
    }

    logoutUser = () => {
        this.setState({
            loggedInUser:false
        }) 
    }

    render() {

        if(this.state.loggedInAdmin) {
            return (
                <React.Fragment>
                    <Redirect to="/admin" />
                    <Admin logout={this.logoutAdmin} />
                </React.Fragment>
            )
        }

        if(this.state.loggedInUser) {
            return (
                <React.Fragment>
                    <Redirect to="/dashboard"/>
                    <Dashboard logout={this.logoutUser} />
                </React.Fragment>
            )
        }

        return (
            <div className={classes.Login}>
                <form onSubmit={this.submitForm} className={classes.LoginForm}>
                    <div className={classes.Logo}></div>
                    <h1>Login</h1>
                        <div className={classes.Inputs}>
                            <label>
                                Username
                            </label>
                                <input  name="username" 
                                        value={this.state.username} 
                                        onChange={this.onChange} 
                                        type="text" 
                                        placeholder="Enter username" 
                                        className={classes.Username}
                                /> 
                            <label>
                                Password
                            </label>
                                <input  name="password" 
                                        value={this.state.password} 
                                        onChange={this.onChange}  
                                        type="password" 
                                        placeholder="Ennter password" 
                                        className={classes.Password}
                                /> 
                        </div>
                    <button type="submit" className={classes.Button}>
                        Login
                    </button>
                    <hr />
                    <p>Not registered yet. Register now</p>
                    <Link to="/register">
                        <button className={classes.Button}>
                            Register
                        </button>
                    </Link>
                    <div className={classes.Absolute}>
                        <div className={classes.User}>
                            <p>Username: user</p>
                            <p>Password: user</p>
                        </div>
                        <div className={classes.User}>
                            <p>Username: admin</p>
                            <p>Password: admin</p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;