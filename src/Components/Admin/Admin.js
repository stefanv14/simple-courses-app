import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import classes from './Admin.css';
import SelectList from './../../Components/SelectList/SelectList'
import NewCourse from './../../Components/NewCourse/NewCourse'

class Admin extends Component {
    state = {
        courses: [{name:'HTML'},{name:'CSS'},{name:'JS'}]
    }
    
    // async getDataAxios(){
    //     const response =
    //       await axios.get("http://localhost:8083/admin")
    //     console.log(response.data)
    // }

    componentDidMount() {
        // AXIOS GET METHOD, AND SET RESPONSE DATA TO state.courses
        // this.getDataAxios();
    }

    handleChange = (e) => {
        this.setState({
            POSTdatabase:{...this.state.POSTdatabase,[e.target.name]:e.target.value
        }});
        console.log(this.state);
    }

    handleSubmit = (e) => {
        // SEND WITH POST METHOD TO DATABASE this.state.POSTdatabase
        // const payload = this.state;
        // data.append("myjsonkey", JSON.stringify(payload));

        // axios('http://localhost:8083/admin',{
        // method: 'POST',
        // body: data,
        // headers: {
        //     'Authorization': `bearer ${token}`,
        //     'Content-Type': 'application/json'
        // }
        // })
        // .then(function(response) {
        //     return response.json()
        //     }).then(function(body) {
        //     console.log(body);
        //     });
        console.log('Submited')
        alert("New course created")
        this.setState({courses:[...this.state.courses,{name:this.state.POSTdatabase.NewCourseName}]})
        document.getElementsByClassName(classes.NewCourse)[0].style.display = "none";
        document.getElementsByClassName(classes.Courses)[0].style.display = "block";
    }

    handleUpdate = () => {
        console.log('Submited')
        alert('Updated')
        // POST METHOD TO DATABASE this.state.POSTdatabase
    }

    handleNewCourse = (e) => {
        this.setState({
            POSTdatabase:{...this.state.POSTdatabase,NewCourseName:e.target.value}
        })
    }

    handleAddNewCourse = () => {
        document.getElementsByClassName(classes.NewCourse)[0].style.display = "block";
        document.getElementsByClassName(classes.Courses)[0].style.display = "none";
    }
    
    render() {
        return (
            <div className={classes.AdminPanel}>
                <div>
                    <form onSubmit={this.handleSubmit} className={classes.Form}>
                    <h1>
                        Admin panel
                    </h1>
                        <div className={classes.Courses}>
                            {this.state.courses.map((el) => 
                                <SelectList name={el.name}
                                            key={el.name}
                                            nameAttr={el.name}
                                            handleChange={this.handleChange}
                                            state={this.state}
                                            classes={classes} 
                                />
                            )}
                            <input  type="button"
                                    onClick={this.handleUpdate}
                                    value="Update" 
                                    className={classes.Button}
                            />
                        </div>
                        <div className={classes.NewCourse}>
                            <NewCourse state={this.state} 
                                       onChange={this.handleNewCourse}
                                       classes={classes}
                                       onChangeHandle={this.handleChange}
                            />
                            <input type="button" 
                                   value="Create" 
                                   onClick={this.handleSubmit} 
                                   className={classes.Button}
                            />                        
                        </div>
                        <input type="button"
                               value="+ Add new course" 
                               onClick={this.handleAddNewCourse} 
                               className={classes.AddNewCourse}
                        />
                        <hr style={{margin:'5% 0'}} />
                        <p>This is Admin page. Only auth people can see this.</p>
                        <Link to="/">
                            <button  type="submit" className={classes.Button}>
                                Logout
                            </button>
                        </Link> 
                    </form>
                </div>
            </div>
        )
    }
}

export default Admin;