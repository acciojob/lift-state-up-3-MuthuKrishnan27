import React from "react";
import "./../styles/App.css"

const Parent = ({text})=>{

    console.log("parent")
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <p>Selected Option: {text}</p>
        </div>
    )
}


export default Parent