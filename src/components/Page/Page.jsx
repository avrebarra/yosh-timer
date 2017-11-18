import React from 'react';
import './index.css'

const Page = (props) => {
  return (
    <div className='Page'>
      <div class="background"></div>
      <div class="foreground">{props.children}</div>
    </div>
  )
}

export default Page;
