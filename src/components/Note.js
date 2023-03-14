import React from 'react'
import {
    DeleteFilled 
  } from '@ant-design/icons';
 import './notes.css'
const Note = ({id,heading,content,date,handleDeleteNode}) => {
  return (
    <div className='note'>
      <h1 className='note_heading'>{heading}</h1>
      <span className='note_content'>
       {content}
      </span>
      <footer className='note-footer'>
      <small className='note_date'>{date}</small>
      <DeleteFilled  onClick={()=>handleDeleteNode(id)} className="del_icon" />

      </footer>
    </div>
  )
}

export default Note
