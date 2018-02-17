import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faShareSquare } from '@fortawesome/fontawesome-free-solid';
import { faBookmark } from '@fortawesome/fontawesome-free-regular';
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
            <h3 className="product-name">{name}</h3>
            <Link to={{pathname: '/', search: `?category=${category.toLowerCase()}`}}>
              <div className="product-category">
                <span>{category}</span>
              </div>
            </Link>
            <p className="product-description">{description}</p>
            <div className="product-footer">
              <div className="product-action">
                <a href={link} target="_blank" className="product-action">
                  Learn More ||
                  <span className="product-price">{formatPrice(price)}</span>
                </a>
              </div>
              <div className="product-footer-icons">
                <button>
                  <FontAwesomeIcon iconDefinition={faShareSquare} />
                </button>
                <button>
                  <FontAwesomeIcon iconDefinition={faBookmark} />
                </button>
              </div>
            </div> 
          </div>
      </div>
    )
  }
}

export default Product;
