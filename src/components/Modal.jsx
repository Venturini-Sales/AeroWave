import React from "react";
import x from '../assets/icons/x.png'
import folder from '../assets/icons/folder.png'
import './Modal.css';

export default function Modal({ isOpen, children, path, onClose }) {
    if (isOpen) {
        return (
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="modalInfo">
                        <div className="modalInfoContent">
                            <img className="icon" src={folder} alt="" />
                            {path}
                        </div>
                        <button className="closeButton" onClick={onClose}>
                            <img className="closeIcon" src={x} alt="" />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        );
    }

    return null;
}