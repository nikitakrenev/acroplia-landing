import React from "react"

export const DownloadButton = ({imageSrc, title, url, alt, className}) => {
    return (
        <a href={url} rel="noopener, noreferrer" className={className}>
            <img src={imageSrc} alt={alt} className="download-button"/>
        </a>
    )
}