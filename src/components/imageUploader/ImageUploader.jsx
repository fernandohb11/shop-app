// import React from 'react'

// const ImageUploader = ({handleSubmit, handleImage}) => {
//   return (
//     <div>
     
//       {/* //usar este */}
//       <input onChange={handleImage} type="file" name="photoURL"/>
//       <button onClick={handleSubmit}>Post 😏</button>
//     </div>
//   )
// }

// export default ImageUploader

import React from 'react'

const ImageUploader = ({handleSubmit, handleText, handleImage}) => {
  return (
    <div>
      {/* //usar este */}
      <input onChange={handleImage} type="file" name="photoURL"/>
      <button onClick={handleSubmit}>Post </button>
    </div>
  )
}

export default ImageUploader
