import React from "react";
import { AlignLeftOutlined } from "@ant-design/icons";
import "./notes.css";
import Note from "./Note";
import AddNote from "./AddNote";
const NoteList = ({ notes, handleAddNote,handleDeleteNode }) => {
  return (
    <div>
      {/* Header Started */}
      <header className="task_header">
        <nav className="task_nav">
          <AlignLeftOutlined className="logo" />
          <h1>Notes</h1>
        </nav>
      </header>
      {/* Main session started */}
      <main className="task_main_container">
        <section className="add_note">
          <AddNote handleAddNote={handleAddNote}/>
        </section>
        <section className="notes_list">
          {notes.map((note) => (
            <Note
              id={note.id}
              heading={note.heading}
              content={note.content}
              date={note.date}
              handleDeleteNode={handleDeleteNode}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default NoteList;
