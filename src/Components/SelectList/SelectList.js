import React from 'react'

import OptionsList from './OptionList';
import OptionsListTime from './OptionsListTime';

const selectList = (props) => {
    return(
        <div>
            <label className={props.classes.UpperCase}>
                <strong>
                    {props.name}
                </strong> 
            </label>
            <p>
                <select name={props.nameAttr + 'day'}  
                        className={props.classes.Select} 
                        onChange={props.handleChange}>
                    <OptionsList />
                </select>
                &nbsp;
                <select name={props.nameAttr + 'time'} 
                        className={props.classes.Select} 
                        onChange={props.handleChange}>
                    <OptionsListTime />
                </select>
            </p>
        </div>
    )
}

export default selectList;