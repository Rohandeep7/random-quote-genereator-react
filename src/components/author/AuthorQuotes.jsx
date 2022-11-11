import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QuoteContext from '../../context/QuoteContext'
import QuoteText from '../randomQuote/QuoteText'
import Spinner from '../shared/Spinner'
const AuthorQuotes = () => {
  const {authorName}=useParams()
  const {loading,dispatch,authorQuotes}=useContext(QuoteContext)
  useEffect(()=>{
    const fetchAuthorQuotes=async ()=>{
      
      dispatch({ type: "SET_LOADING" });
      const response = await fetch(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}`
      );
      const data = await response.json();
        console.log(data.data)
      dispatch({ type: "SET_AUTHOR_QUOTES", payload: data.data });
      
    }

    fetchAuthorQuotes()
  },[])
  return loading ? <Spinner/> : (
    <div className=' mt-12 w-10/12 md:w-6/12 mx-auto space-y-20 mb-24'>
      <h1 className='text-3xl pl-4 md:pl-24 font-bold font-raleway'>{authorName}</h1>
      <div className=''>
      {authorQuotes && authorQuotes.map(quote=>{
        return <QuoteText key={quote._id} quote={quote} type='author'/>
      })}
      </div>
      
    </div>
  )
}

export default AuthorQuotes