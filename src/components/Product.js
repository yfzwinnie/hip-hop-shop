import React from 'react';
import { formatPrice } from '../helpers';

class Product extends React.Component {
  render() {
    const { name, link, image, description, price, category } = this.props;
    return (
      <div className="product-detail">
        <h3 className="product-name">{name}
          <span className="product-price">{formatPrice(price)}</span>
        </h3>
        <a href={link}>
          <img src={image} alt={name} />
        </a>
        <p className="product-description">{description}></p>
        <p className="product-category">{category}</p>
      </div>
    )
  }
}

export default Product;
