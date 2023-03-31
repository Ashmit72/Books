import { useState} from 'react'
import React from 'react'
import useBooksContext from '../hooks/use-books-context'

export default function BookEdit({book,onSubmit}) {
  const [title,setTitle]=useState(book.title)
  const {editBookById}=useBooksContext()

  const handleChange=(event)=>{
    setTitle(event.target.value) 
  }

  const handleSubmit =(event)=>{
    event.preventDefault()
    onSubmit()
    editBookById(book.id,title )
  }

  return (
    <form onSubmit={handleSubmit} className='book-edit' >
      <label>Title</label>
      <input onChange={handleChange} value={title} className="input" />
      <button className="button is-primary">Save</button>
    </form>
  )
}
