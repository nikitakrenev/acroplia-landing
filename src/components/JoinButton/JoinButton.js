import React from "react";

export const JoinButton = ({target, title, className = "", ttleClass = ""}) => {
    return (
        <button
            className={"btn solid-btn join-button " + className}
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