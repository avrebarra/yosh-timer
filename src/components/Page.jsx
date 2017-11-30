import React from 'react';
import 'styles/Page.css'

const Page = (props) => {
  return (
    <div className='Page'>
      <div className="foreground">{props.children}</div>
    </div>
  )
}

export default Page;
