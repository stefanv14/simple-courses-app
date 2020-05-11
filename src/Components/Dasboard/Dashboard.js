import React, { Component } from 'react';

import classes from './Dashboard.css';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';

export class Dashboard extends Component {
  state = {
    //HARDCODED NEED SEND GET REQUEST TO DATABASE
    courses: [
      {
        name:'HTML',
        day:'Ponedeljak',
        time:'15h'
      },
      {
        name:'CSS',
        day:'Sreda',
        time:'13h'
      },
      {
        name:'JS',
        day:'Petak',
        time:'10h'
      }
    ]
  }

  componentDidMount() {
    // AXIOS GET METHOD WITH DATABASE, SET RESPONSE DATA TO this.state.courses
    // async getDataAxios(){
    //     const response =
    //       await axios.get("http://localhost:8083/admin")
    //     console.log(response.data)
    // }
  }

  render() {
    return (
      <div className={classes.Dashboard}>
        <div className={classes.WrapDiv}>
          <h1>Dashboard</h1>
          <h2>My courses</h2>
          {this.state.courses.map((el) =>
            <Course name={el.name} 
                    time={el.day + ',' + ' ' + el.time}
                    key={el.name}/>
          )}
          <Link to="/">
            <button onClick={this.props.logout} type="submit" className={classes.Button}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Dashboard;
