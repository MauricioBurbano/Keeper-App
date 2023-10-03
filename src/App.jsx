import { useState } from 'react';
import Footer from './components/Footer'
import Header from "./components/Header"
import Form from './components/Form'
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([])

  function addNote(note) {
    setNotes(prevNotes => [...prevNotes, note])
  }

  function deleteNote(i) {
    setNotes(prevNotes => prevNotes.filter((note, index) => index !== i))
  }

  return (
    <>
      <Header />
      <Form onSubmit={addNote} />
      {notes.map((note, index) => 
        <Note 
          key={index}
          index={index}
          title={note.title} 
          content={note.content} 
          handleClick={deleteNote}
        />)
      } 
      <Footer />
    </>
  );
}

export default App
