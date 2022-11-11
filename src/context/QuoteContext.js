import React, { createContext, useReducer, useState } from 'react'
import QuoteReducer from './QuoteReducer'
const QuoteContext=createContext()
export const QuoteProvider = ({children}) => {

  const initialState={
    quote:[],
    authorQuotes:[],
    loading:false
  }
  const [quote,dispatch]=useReducer(QuoteReducer,initialState)
  return (
    <QuoteContext.Provider value={{...quote,dispatch}}>
      {children}
    </QuoteContext.Provider>
  )
}

export default QuoteContext