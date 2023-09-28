import { useState } from "react";

const terms = ['Fall', 'Winter', 'Spring'];
  
const TermButton = ({term, selection, setSelection}) => (
    <div>
        <input type="radio" id={meal} className="btn-check" checked={term === selection} autoComplete="off"
        onChange={() => setSelection(term)} />
        <label className="btn btn-success mb-1 p-2" htmlFor={term}>
        { term }
        </label>
    </div>
);

export default TermButton;

