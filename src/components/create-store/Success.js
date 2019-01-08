import React from 'react'
import {Alert, Button} from 'antd';
import {Link} from 'react-router-dom';


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
    <Link to="/myStores">
    <Button>Tienda y productos</Button>
    </Link>

    </div>
  )
}

export default Success
