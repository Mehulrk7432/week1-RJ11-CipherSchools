import React from "react";
const Test = ({name =" ", setName}) => {
    return (
        <div>
        <h1> the name is: {name}</h1>
        <input>
        type = "text"
        value={name}
        onChange{(e) => setName(e.target.value)}
        </input>
        
        </div>
    );
};
export default Test;