import React from 'react';
import AddProductForm from './AddProductForm';

class Admin extends React.Component {

  render() {
    return (
      <div>
        <AddProductForm products={this.props.products} addProductPost={this.props.addProductPost}/>
      </div>
    )
  }
}

export default Admin;
