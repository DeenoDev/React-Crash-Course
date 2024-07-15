import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const overide = {
    display: 'block',
    margin: '100px auto'
}

const Spinner = ({loading}) => {
  return (
    <ClipLoader 
    color='#4338ca'
    loading={ loading }
    cssOverride={overide}
    
    />
  )
}

export default Spinner