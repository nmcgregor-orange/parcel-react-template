import React from "react";
import ReactDOM from "react-dom";

function App(){
    return <div>App</div>;
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);