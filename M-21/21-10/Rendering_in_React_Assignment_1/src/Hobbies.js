import React from "react";
import "./General.css";

function Hobbies({hobbies = []}) {
  if (hobbies) {
    const renderedHobbies = hobbies.map((data, index) => (
      <li key={index}>{data}</li>
    ));

    return (
      <div>
        <div className="Row">
          <h4>Hobbies</h4>
        </div>
        <ul className="Col, SpacingFix">{renderedHobbies}</ul>
      </div>
    );
  }
  return null;
}

export default Hobbies;
