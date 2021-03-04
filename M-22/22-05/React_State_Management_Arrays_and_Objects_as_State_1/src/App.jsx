import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const [timestamps, setTimeStamp] = useState([]);
  const TimeStampPush = () => setTimeStamp([...timestamps, Date.now()]);

  return (
    <div>
      <ClickTimes TimeStampPushHandler={TimeStampPush}/>
      <TimestampsDisplay timestamps={timestamps}/>
    </div>
  );
}

export default App;
