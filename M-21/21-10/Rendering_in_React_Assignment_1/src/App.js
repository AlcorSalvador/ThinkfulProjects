import React from "react";
import Activities from "./Activities";
import Hobbies from "./Hobbies";
import "./General.css";

function App() {
  const name = "Kitty Kat";
  const birthday = "January 1";
  const imageSrc =
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg";
  const hobbies = ["watching birds", "hiding in a box", "napping"];
  const dailyActivities = [
    { time: "8:00 am", description: "wake up" },
    { time: "8:30 am", description: "breakfast" },
    { time: "9:00 am", description: "morning nap" },
    { time: "12:00 pm", description: "lunch" },
    { time: "1:00 pm", description: "afternoon nap" },
    { time: "6:00 pm", description: "dinner" },
    { time: "7:00 pm", description: "play" },
    { time: "10:00 pm", description: "bedtime" },
  ];
/*
  return (
    <div>
      <div className="Row">
        <img className="Row Image" src={imageSrc}></img>
        <div className="Col">
          <h2>{name}</h2>
          <h3>Birthday: {birthday}</h3>
        </div>
      </div>
      <div>
        <Hobbies hobbies={hobbies} />
      </div>
      <div className="Row">
        <Activities dailyActivities={dailyActivities} />
      </div>
    </div>
  );
  */

  let hobbieChunk = "";
  if (hobbies) {
    const renderedHobbies = hobbies.map((data, index) => (
      <li key={index}>{data}</li>
    ));

    hobbieChunk = (
      <div>
        <div className="Row">
          <h4>Hobbies</h4>
        </div>
        <ul className="Col, SpacingFix">{renderedHobbies}</ul>
      </div>
    );
  }

  let activitiesChunk = "";
  if (dailyActivities) {
    const renderedActivities = dailyActivities.map(
      ({ time, description }, index) => (
        <tr className="Confused"  key={index}>
          <td>{time}</td>
          <td>{description}</td>
        </tr>
      )
    );

    activitiesChunk = (
      <table className="Block">
        <tbody>{renderedActivities}</tbody>
      </table>
    );
  }

  return (
    <div>
      <div className="Row">
        <img className="Row Image" src={imageSrc}></img>
        <div className="Col">
          <h2>{name}</h2>
          <h3>Birthday: {birthday}</h3>
        </div>
      </div>
      <div>{hobbieChunk}</div>
      <div className="Row">
        <div>{activitiesChunk}</div>
      </div>
    </div>
  );
}

export default App;
