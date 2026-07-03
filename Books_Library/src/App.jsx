import { useEffect, useId, useState,useCallback } from 'react'

function App() {
  const titleId=useId()
  const authorId=useId()
  const categoryId=useId()
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [input, setInput] = useState("");
  const category=[
    {
      id:0,
      categoryis:"Select Category"
    },
    {id:1,
      categoryis:"programming"
    },
    {id:2,
      categoryis:"Novels"
    },
    {id:3,
      categoryis:"Recipies"
    },
    {id:4,
      categoryis:"Comedy stories"
    },
    {id:5,
      categoryis:"Thesis"
    }
]
const categoryOptions = category.map((cat) => (
  <option key={cat.id} value={cat.categoryis}>
    {cat.categoryis}
  </option>
))
const handlesubmit=(e)=>{
  e.preventDefault();
  if(!(title.trim()=== "" || author.trim()=== "" || input.trim() === "SelectCategory" ||  input.trim() === "" )){
    setBooks([...books,{
    booktitle:title,
    bookauthor:author,
    bookcategory:input
  }])
  }
  setAuthor("")
  setTitle("")
  setInput("")
}
useEffect(() => {
  console.log("Books Updated");
  console.log(books);

  document.title = `Books (${books.length})`;
}, [books]);
  const Display=()=>{
    return(
      books.map((book, index)=>{
        return(
        <div key={index}
        className='ml-5 border-2 p-2 mt-5 w-350 bg-blue-400'>
          <p>Title :  {book.booktitle}</p>
          <p>Author :  {book.bookauthor}</p>
          <p>Category :  {book.bookcategory}</p>
          <button type="button"
          className='pl-2 pr-2 border-2 bg-red-700'
          onClick={(index)=>{Delete(index)}
          }>Delete</button>
        </div>
        

      )
      })
    )
  }
  const Delete=useCallback((index)=>{
    const newarr=[...books]
    newarr.splice(index,1)
    setBooks(newarr)
  },[books])
  return (
    <>
    <h1 className='text-4xl text-center mb-5'>Books Library</h1>
    <form 
    className='ml-4'>
      <fieldset className='border-2 p-2 w-350'>
        <label htmlFor={titleId}>Title</label>
      <input type="text"
      id={titleId}
      value={title}
      placeholder='Enter Title'
      onChange={(e)=>{setTitle(e.target.value)}}
      className='m-2 border-2'
       />
       <br /><br />
        <label htmlFor={authorId}>Author</label>
      <input type="text"
      id={authorId}
      value={author}
      placeholder='Enter Author'
      onChange={(e)=>{setAuthor(e.target.value)}}
      className='m-2 border-2'
       />
       <br /><br />
        <label htmlFor={categoryId}>Category</label>
        <select name="Category" id={categoryId} value={input} onChange={(e)=>setInput(e.target.value)}
          className='m-2 border-2'>
          {categoryOptions}
        </select>
        <br /><br />
         <button type="submit" onClick={handlesubmit}
        className='ml-72 border-2'>Submit</button>
      </fieldset>
       
    </form>
    <Display/>
    </>
  )
}

export default App
