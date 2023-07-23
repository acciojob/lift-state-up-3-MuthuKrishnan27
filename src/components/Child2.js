import React from "react";
import "./../styles/App.css"


const Child2 = ({setText})=>{

    console.log("child2")
    function fun(){
        setText("Option 2");
    }
    return (
        <div className="child2">
              <h2>Child Component 2</h2>
              <button onClick={fun}>Option 2</button>
        </div>
    )
}


export default Child2