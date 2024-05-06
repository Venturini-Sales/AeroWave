import React from "react";
import folder from '../../assets/icons/folder.png'
import './Container.css' 

export default function Container ({ path, children }) {
    return (
        <div className="container">
            <div className="headerBar">
                <img src={folder} alt="folder"/>{path}</div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}
