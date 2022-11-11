import React from 'react'
import {Link} from 'react-router-dom'
import CachedIcon from '@mui/icons-material/Cached';
const Navbar = () => {
  return (
    <nav className='m-6 flex justify-end pr-6 md:pr-16'>
      <a href='/' className='flex'>
        <h2 className='font-raleway text-xl'>
          random
        </h2>
        <span className='pl-2'><CachedIcon/></span>
      </a>
    </nav>
  )
}

export default Navbar