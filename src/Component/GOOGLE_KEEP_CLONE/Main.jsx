import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
const Main = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert("recieved");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };
  const onDelete = (id) => {
    setAddItem((oldData)=>{
        oldData.filter((currentData,indexx)=>{
            return indexx !== id;
        })
    })
  };
  return (
    <>
      <Header />
      <CreateNote addNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deteteItem={onDelete}
          />
        );
      })}
    </>
  );
};

export default Main;
