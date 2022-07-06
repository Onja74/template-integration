import React from 'react';
import "./BoutonType.css";

const BoutonType = (props) => {
    let defComponent    = props.defComponent;
    let defClass        = props.defClass;
    let defFunction     = props.defFunction;
    return (
        <button id="bouton" className={defClass} onClick={defFunction}>
            {defComponent}
        </button>
    );
};

export default BoutonType;