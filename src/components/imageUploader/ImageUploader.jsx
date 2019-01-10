

import React from 'react'


const ImageUploader = ({handleSubmit, handleImage}) => {
  return (
    <div>
      <h4>Sube la imagen de tu producto</h4>
      <input onChange={handleImage} type="file" name="photoURL"/>
      {/* <button onClick={handleSubmit}>Post </button> */}
    </div>
  )
}

export default ImageUploader
