import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBookmark, faShareSquare } from '@fortawesome/fontawesome-free-solid';
import { formatPrice } from '../helpers';

class Product extends React.Component {
  render() {
    const { name, link, image, description, price, category, fullWidth } = this.props;
    return (
      <div className={fullWidth === "true" ? "product-detail full-width" : "product-detail"}>
          <div className="product-image">
              <a href={link}>
                <img src={image} alt={name} />
              </a>
          </div>
          <div className="product-info">
            <h3 className="product-name">{name}
              <span className="product-price">{formatPrice(price)}</span>
            </h3>
            <p className="product-category">{category}</p>
            <p className="product-description">{description}</p>
            <button>
              <FontAwesomeIcon iconDefinition={faShareSquare} />
            </button>
            <button>
              <FontAwesomeIcon iconDefinition={faBookmark} />
            </button>
          </div>
      </div>
    )
  }
}

export default Product;
