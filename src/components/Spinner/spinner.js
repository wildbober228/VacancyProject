import React from 'react';
import "./spinner.css"
import {Transition} from "react-transition-group";

const Spinner = ({width = 100, height = 100}) => {

    return (
        <div className="spinner-container">
            <Transition
                in={true}
                timeout={500}
                mountOnEnter
                unmountOnExit
            >
                {state => <div className={`spinner ${state}`} style={{width: width, height: height}}/>}
            </Transition>

        </div>
    );
};

export default Spinner;
