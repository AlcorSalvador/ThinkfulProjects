import React from "react";
import "./General.css";

function Activities({dailyActivities}) {
  if (dailyActivities) {
    const renderedActivities = dailyActivities.map(
      ({ time, description }, index) => (
        <tr className="Confused" key={index}>
          <td>{time}</td>
          <td>{description}</td>
        </tr>
      )
    );

    return (
      <div className="Block">
        <table>{renderedActivities}</table>
      </div>
    );
  }
  return null;
}

export default Activities;
