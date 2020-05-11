import React from 'react';

const course = (props) => {
    return(
        <div>
            <p>
                {props.name}:&nbsp;
                <span>
                    {props.time}
                </span>
            </p>
        </div>
    )
}

export default course;