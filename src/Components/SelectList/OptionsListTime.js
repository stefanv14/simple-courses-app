import React from 'react';

const optionsTime = () => {
    const time = [];
    for(let i = 8;i<19;i++){
        time.push(i+ 'h');
    }
    return (
        <React.Fragment>
             <option value="DEFAULT" disabled selected>Choose time</option>
             {time.map(el=>
                  <option value={el}>{el}</option>
             )}
        </React.Fragment>
    )
}

export default optionsTime;