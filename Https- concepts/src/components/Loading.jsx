import React from 'react'
import Spinner from 'react-bootstrap/Spinner';


const Loading = () => {
  return (
   <>
    <Spinner className='mx-auto m-auto' animation="border" variant="info" />
    <p>Loading ...</p>
   </>
  )
}

export default Loading