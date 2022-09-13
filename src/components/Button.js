import './Button.css';
import React, {useState} from 'react';

function Button (props) {
    const [val, setVal] = useState("0");
    return(
        <input type="button" className="button" value={props.value} onClick={e => setVal(val+props.value)}/>
    );
};

export default Button;