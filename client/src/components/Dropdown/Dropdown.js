import React from "react";

export const Dropdown = () => (
    <div>
        <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>
        <ul id='dropdown1' className='dropdown-content'>
            <li>one</li>
            <li>two</li>
        </ul>
    </div>
);