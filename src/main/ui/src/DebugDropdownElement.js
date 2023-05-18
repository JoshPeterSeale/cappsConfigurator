import React, { useState } from "react";
import './DropdownElement.css';

export function DebugDropdownElement(props) {
    const [lengths, setLengths] = useState(props.array);

    return (
        <div>
            <ul> lengths </ul>
        </div>
    );
}
