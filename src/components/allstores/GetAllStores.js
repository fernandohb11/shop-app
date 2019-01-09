import React, { Component } from 'react'
import {Card,Icon} from 'antd';
import {Link} from 'react-router-dom'
import axios from 'axios';

class GetAllStores extends Component {

  state = {
    list: [],
    Store: {}
  }

  getStores = () => {
    axios.get('https://ironbutik.herokuapp.com/store/store')
      .then(response => {
        this.setState({ list: response.data })
        console.log(response.data)
      })
      .catch(e => console.log(e))
  }
    render() {
      console.log(this.state.list)
      return (
        <div >
          <div>
            {this.state.list.map((Store, index) => {
              return <Card
                style={{ width: 300 }}
                actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}
                key={Store._id}>
                <p>{Store.tituloShop}</p>
              </Card>
            })}
          </div>
        </div>
      )
    }
  }

      export default GetAllStores
    