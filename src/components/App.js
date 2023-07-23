
import React,{useState} from "react";
import './../styles/App.css';
import Parent from "./../components/Parent";
import Child1 from "./../components/Child1";
import Child2 from "./../components/Child2";

const App = () => {
  let [text,setText] = useState("");
  return (
    <div>
          <Parent text={text} />
          <Child1 setText ={ setText} />
          <Child2 setText ={ setText}/> 
    </div>
  )
}

export default App
