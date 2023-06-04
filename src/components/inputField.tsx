import React from "react";
import "./style.css";
const InputField = () => {
    return (
        <div>
            <form className="ff">
                <input type="text" className="fname" placeholder="Enter a task" />
                <button type="button" className="fbutton">Go</button>
            </form>
        </div>
    );
};

export default InputField;

