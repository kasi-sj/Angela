import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);
  const addNote = (value) => {
    setNoteList((prev) => {
      return [...prev, value];
    });
  };
  const deleteNote = (value) => {
    setNoteList((prev) => {
      return prev.filter((ele, ind) => {
        return ind !== value;
      });
    });
  };
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.map((ele, ind) => (
        <Note
          key={ind}
          id={ind}
          title={ele.title}
          content={ele.content}
          deleteNote={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
