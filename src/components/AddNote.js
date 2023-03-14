import React, { useState } from "react";
import "./notes.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (e) => {
    // console.log(e.target.value);
    setNoteText(e.target.value);
  };
  const displayText = () => {
    // console.log("text",noteText);
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="text_area">
      <input
        type="text"
        id="text_field"
        placeholder="Add a note..."
        value={noteText}
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            displayText();
          }
        }}
      ></input>
    </div>
  );
};

export default AddNote;
