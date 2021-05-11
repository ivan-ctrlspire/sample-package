import React from 'react';

const Button = (props) => {
    return (
        <button className={`${props.class}`}
            data-id={props.id}
            name={props.name}
            disabled={props.disabled}
            onClick={props.handleClick}
        >
            <h4>
                {props.label}
            </h4>
        </button>
    );
}

export default Button;