import React, { useState } from "react";
import "./CSSs/CreateContext.css";
const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNote((prevData) => {
      return {
        ...prevData, //prevData store all the data from useState
        [name]: value, //enable us to take data
      };
    });
    // console.log(note);
  };
  const addEvent = () => {
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const Default = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="main_note">
        <form onSubmit={Default}>
          <div>
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title..."
              autoComplete="off"
            />
          </div>
            <input
              placeholder="Write a note..."
              name="content"
              value={note.content}
              onChange={InputEvent}
              rows=""
              colomn=""
              className="input2"
            />
            <button onClick={addEvent} class="glow-on-hover" type="button">
              <i class="fa-regular fa-plus" ></i>
            </button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
