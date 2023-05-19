import React from "react";
import NoteFormat from "./NoteFormat";
import "./MainBody.css";

function MainBody(props) {
  return (
    <div className="tasks">
      {props.Data.map((task) => (
        <NoteFormat key={task.id} title={task.task} />
      ))}
    </div>
  );
}

export default MainBody;
