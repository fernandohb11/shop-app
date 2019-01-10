

import React from 'react'


const ImageUploader = ({handleSubmit, handleImage}) => {
  return (
    <div>
      <input onChange={handleImage} type="file" name="photoURL"/>
      {/* <button onClick={handleSubmit}>Post </button> */}
    </div>
  )
}

export default ImageUploader
