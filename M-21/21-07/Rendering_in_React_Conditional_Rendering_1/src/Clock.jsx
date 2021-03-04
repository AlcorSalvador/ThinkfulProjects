import { checkPropTypes } from "prop-types";
import React from "react";

function Clock() {
  const time = new Date().getHours();

  switch (true) {
    case time < 12: return <h1>Good Morning!</h1>;
    case time <= 18 && time >= 12: return <h1>Good Afternoon!</h1>;
    case time > 18: return <h1>Good Evening!</h1>;
    default: return <h1>ERROR</h1>;
  };
}

export default Clock;
