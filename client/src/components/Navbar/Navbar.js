import React from "react";

export const Navbar = () => (
    <div>


        <div className="navbar-fixed z-depth-3">
            <nav>
                <div className="nav-wrapper red accent-4 ">
                    <a href="/" className="brand-logo center green-text text-darken-4 hide-on-med-and-down"><strong>Christmas Lists</strong></a>
                    <ul className=" white green-text text-darken-4 ">
                        <li>
                        <a className="green-text text-darken-4 flow-text" href="/"><small>Home</small></a>
                        </li>
                        <li className="">
                            <a className="green-text text-darken-4 flow-text" href="instructions"><small>Instructions</small></a>
                        </li>
                    
                    </ul>
                </div>
            </nav>
        </div>
    </div>

);
