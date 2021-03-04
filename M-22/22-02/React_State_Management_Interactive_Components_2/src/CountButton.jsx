import React, { useState } from "react";

function CountButton() {  
    const [counter, setCounter] = useState(0);
    return (<button onClick={() => setCounter((counter) => counter + 1)}>Click Count: {counter}</button>);
    //return (<button onClick={() => setCounter(counter + 1)}>Click Count: {counter}</button>);
}

export default CountButton;
