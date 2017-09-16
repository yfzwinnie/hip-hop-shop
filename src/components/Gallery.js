import React from 'react';
import Product from './Product';
const queryString = require('query-string');

class Gallery extends React.Component {

  parseUrl() {
    const parsed = queryString.parse(this.props.location.search);
    return parsed;
  }
  

  render() {
    const { products } = this.props;

    return (
      <div className="gallery">
        {products.filter((item, index) => {
          console.log(item);
          console.log(this.parseUrl().category);
          return item.category.toLowerCase() === this.parseUrl().category;
        }).map((item, index) => {
          return <Product key={index} {...item}></Product>; //using the map function to loop over all our products and map it to the product component. Instead of saying item.name equals the name within the Product component, the spread operator does this for us.
        })}
      </div>
    );
  }
}

export default Gallery;
