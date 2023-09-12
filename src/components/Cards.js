import React from "react";
import "../css/components/cards.css"

function Cards({ color, icon, title, subtitle }) {
    return(
        <div className="card-container">
            <div className="card-container-img" style={{backgroundColor: color}}>
            <img src={icon} alt="..."></img>
            </div>
            <div className="card-container-information">
                <p className="valeur">{title}</p>
                <p className="name">{subtitle}</p>
            </div>
        </div>
    )
}

export default Cards