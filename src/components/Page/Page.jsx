import React from 'react';
import './index.css'

const Page = (props) => {
  return (
    <div className='Page'>
      <div className="foreground">{props.children}</div>
    </div>
  )
}

export default Page;
