import React from 'react'
import {Alert, Button} from 'antd';

const Success = () => {
  return (
    <div>
      <Alert
      message="¡Éxito!"
      description="¡La tienda y el artículo fueron creados exitosamente!"
      type="success"
      showIcon
    />
    <br></br>
    <Button>Tienda y productos</Button>
    </div>
  )
}

export default Success
