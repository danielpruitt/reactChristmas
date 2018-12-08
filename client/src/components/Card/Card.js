import React from "react";

export const Card = (props) => (


    <div className="card-panel teal" value = {props.couple}>
        <h4 className="white-text">
            {props.gift}
        </h4>
        <h4>
            {props.info}
        </h4>
    </div>


);