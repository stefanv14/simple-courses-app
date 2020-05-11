import React from 'react'

const newCourse = (props) => {
    return (
        <div>
            <label>
                Course name
            </label><br />
                <input  name="NewCourseName" 
                        value={props.state.NewCourseName} 
                        onChange={props.onChange} 
                        type="text" 
                        placeholder="Enter course name" 
                        className={props.classes.Username}
                />
        </div>
    )
}

export default newCourse;