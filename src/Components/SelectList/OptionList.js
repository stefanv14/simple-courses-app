import React from 'react';

const options = () => {
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
    return (
        <React.Fragment>
             <option value="DEFAULT" disabled selected>Choose day</option>
             {days.map(el=>
                  <option value={el}>{el}</option>
             )}
        </React.Fragment>
    )
}
export default options;