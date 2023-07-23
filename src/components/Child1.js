import React from "react";
import "./../styles/App.css"

const Child1 = ({setText})=>{

    console.log("child1")
    function fun(){
       setText("Option 1");
    }
    return (
        <div className="child1"> 
            <h2>Child Component 1</h2>
            <button onClick={fun}>Option 1</button>
        </div>
    )
}


export default Child1