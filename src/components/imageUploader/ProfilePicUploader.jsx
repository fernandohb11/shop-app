

import React from 'react'


const ImageUploader = ({ handleImage}) => {
  return (
    <div>
      <input onChange={handleImage} type="file" name="photoURL"/>
    </div>
  )
}

export default ImageUploader

