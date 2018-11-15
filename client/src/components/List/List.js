import React from "react";

export const List = ({children}) => {
    return (
        <div className="">
            <ul className="collection">
                {children}
            </ul>
        </div>
    );
};