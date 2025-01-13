import React from 'react'
const Header = () => {
    console.log('This is to check if cascade of re-renders happen?');
    
  return (
    <h1>This is Header</h1>
  )
}

export default React.memo(Header)