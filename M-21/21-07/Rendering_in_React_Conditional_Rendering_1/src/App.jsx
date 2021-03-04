import React from "react";
import Clock from "./Clock";

function App(props) {
    switch (props.loggedIn){
        case (true): return <Clock/>; break;
        case (false): return; break;
        default: return; break;
    }
}

export default App;
