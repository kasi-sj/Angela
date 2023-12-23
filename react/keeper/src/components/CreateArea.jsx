import React, { useState } from "react";

function CreateArea(params) {
  const [notes, setNotes] = useState({ title: "", content: "" });
  const change = (event) => {
    const { name, value } = event.target;
    setNotes((prev) => {
      return { ...notes, [name]: value };
    });
  };

  const submit = (event) => {
    params.addNote(notes);
    setNotes({ title: "", content: "" });
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input
          onChange={change}
          name="title"
          value={notes.title}
          placeholder="Title"
        />
        <textarea
          onChange={change}
          name="content"
          value={notes.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
