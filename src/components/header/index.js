import React from "react";
import './index.css';

function Header(data) {

    return (
        <div className="Header-Container">
            <div className="Header-Title">{data.title}</div>
            <div className="Header-Desc">{data.desc}</div>
        </div>
    )
}

export default Header