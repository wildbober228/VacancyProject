import React, {useState} from 'react';

const Spinner = () => {

    const [spinnerVisible, setSpinnerVisible] = useState(false)

    return (
        <div className="spinner-container">
            <div className="spinner">

            </div>
        </div>
    );
};

export default Spinner;
