import React from "react";

export const JoinButton = ({target, title, className = "", ttleClass = ""}) => {
    return (
        <button
            className={"btn solid-btn join-button " + className}
            onClick={() => window.open(target, '_blank')}
        >
            <a className={ttleClass}
               href={target}
               rel="noopener noreferrer"
               target="_blank"
            >
                {title}
            </a>
        </button>
    )
};