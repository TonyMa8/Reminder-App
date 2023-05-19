import React, { useState } from "react";
import "./NoteFormat.css";

function NoteFormat(props) {
  const [task, setTask] = useState(props.title);

  function clickHandler() {
    setTask("REMOVED!");
    console.log(task);
  }
  return (
    <div className="new-task">
      <div>
        <h1>{task}</h1>
      </div>
      <div>
        <button onClick={clickHandler}>Remove</button>
      </div>
    </div>
  );
}

export default NoteFormat;
