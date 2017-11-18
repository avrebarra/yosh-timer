import React from 'react';
import './index.css'

const Page = (props) => {
  return (
    <div className='Page'>
      {props.children}
    </div>
  )
}

export default Page;
