import React from "react";
import "./CSSs/Note.css";
const Note = (props) => {
  const deleteNote = () => {
    props.deteteItem(props.id);
  };
  return (
    <>
      <divl className="note-section">
        <div className="note">
          <h1> Keep ID : {props.id}</h1>
          <br />
          <h2>Title : {props.title}</h2>
          <h1>Note: {props.content}</h1>
          <button onClick={deleteNote} class="glow-on-hover" type="button">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </divl>
    </>
  );
};

export default Note;
