import React, { useState, useEffect } from "react";
import './DropdownElement.css';
import { GetDiameters, GetPitch, GetNutType } from './GetValues.js'


export function DropdownElement(props) {
    const [values, setValues] = useState([]);


    const fetchValues = (props) => {
      fetch('/api/v1/bolt-configuration/'+props.url)
        .then(response => {
          return response.json()
        })
        .then(value => {
          setValues(value)
        })
    }

    useEffect(() => {
        fetchValues(props)
      }, [])

    return (
      <div className='dropdown-container'>
        <h5> {props.label} </h5>
          <select>
            {values.map(value => (
              <option> {value} </option>
            ))};
          </select>
      </div>
    );
}
