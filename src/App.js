import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import "./App.css";

import NoteList from "./components/NoteList";

const baseURL ="http://localhost:8001/notes";


function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      heading: "Note Heading1",
      content: "Note Content1",
      date: "11/03/2022",
    },
    {
      id: nanoid(),
      heading: "Note Heading2",
      content: "Note Content2",
      date: "11/03/2022",
    },
    {
      id: nanoid(),
      heading: "Note Heading3",
      content: "Note Content3",
      date: "11/03/2022",
    },
    {
      id: nanoid(),
      heading: "Note Heading4",
      content: "Note Content4",
      date: "11/03/2022",
    },
    {
      id: nanoid(),
      heading: "Note Heading5",
      content: "Note Content5",
      date: "11/03/2022",
    },
  ]);
  useEffect(()=>{
    axios.get(baseURL).then((response) => {
     console.log(response);
    });

  },[])
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      content: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNode = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <NoteList notes={notes} handleAddNote={addNote} handleDeleteNode={deleteNode}  />
    </div>
  );
}

export default App;
