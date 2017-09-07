import React from 'react';
import AddProductForm from './AddProductForm';

class Admin extends React.Component {

  render() {
    return (
      <div>
        <AddProductForm addProduct={this.props.addProduct}/>
      </div>
    )
  }
}

export default Admin;
