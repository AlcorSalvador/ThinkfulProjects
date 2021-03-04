import React from "react";

function ClickTimes ({TimeStampPushHandler}) {
    return <button onClick={() => TimeStampPushHandler()}>Muffin Button</button>
}

export default ClickTimes;
