import React from 'react'
import {Slide} from '@mui/material'
const QuoteText = ({quote,type}) => {
  return (
    <Slide in={true} direction='left'>
      <div className='flex gap-12 mb-8'>
        <div className='line'></div>
        <div className={`font-raleway ${type==='author' ? 'text-xl md:text-2xl':'text-2xl md:text-4xl'}`}>
          "{quote.quoteText}"
        </div>
      </div>
    </Slide>
  )
}

export default QuoteText