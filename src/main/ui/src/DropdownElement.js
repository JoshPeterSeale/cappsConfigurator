import React from "react";

export function DropdownElement(props) {
    return (
        <div>
            <select>
                <option> {props.label} </option>
                <option> Diameter </option>
            </select>
        </div>
    );
}
