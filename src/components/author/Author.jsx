import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Slide } from '@mui/material';
const Author = ({quote}) => {
  return (
    <Slide in={true} direction='up'>
    <div className='mt-12 flex items-center btn hover:text-gray-50 cursor-pointer p-6 justify-between '>
        <div className='leftContent'>
          <h1 className='text-2xl font-raleway font-bold'>{quote.quoteAuthor}</h1>
          <p className='font-raleway mt-2'>{quote.quoteGenre}</p>
        </div>
        <div className='rightContent'>
            <ArrowRightAltIcon/>
        </div>
    </div>
    </Slide>
  )
}

export default Author