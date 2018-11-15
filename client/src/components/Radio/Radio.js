import React from "react";

export const Radio = (props) => (
    <div>
        <p>
            <label>
                <input name={props.name} type="checkbox"  />
                <span>{props.name}</span>
            </label>
        </p>
        </div>
    

)