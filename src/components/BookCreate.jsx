import { useState} from 'react'
import React from 'react'
import useBooksContext from '../hooks/use-books-context'

export default function ({}) {
    const [title,setTitle]=useState('')
    const {createBook}=useBooksContext()

const handleChange=(event)=>{
setTitle(event.target.value)

 
}

const handleSubmit=(event)=>{
event.preventDefault()
createBook(title) 
setTitle('')       
}

  return (
    <div className='book-create' >
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit} >
            <label>Title</label>
            <input className='input' value={title} onChange={handleChange} />
            <button className='button' >Create</button>
        </form>
    </div>
  )
}
