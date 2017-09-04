import React from 'react';
import Product from './Product';

class Gallery extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div className="gallery">
        {products.map((item, index) => {
          return <Product key={index} {...item}></Product>; //using the map function to loop over all our products and map it to the product component. Instead of saying item.name equals the name within the Product component, the spread operator does this for us. 
        })}
      </div>
    );
  }
}

export default Gallery;
