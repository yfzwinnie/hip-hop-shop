import React from 'react';
import Product from './Product';
import { CSSTransitionGroup } from 'react-transition-group';
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
          if (Object.keys(this.parseUrl()).length === 0) {
            return true;
          } else {
            return item.category.toLowerCase() === this.parseUrl().category;
          }
        }).map((item, index) => {
          return (
            <CSSTransitionGroup
              component="div"
              transitionName="product"
              transitionAppear={true}
              transitionAppearTimeout={10000}
              transitionEnterTimeout={10000}
              transitionLeaveTimeout={10000}
            >
              <Product key={index} {...item}></Product>
            </CSSTransitionGroup>
            ); //using the map function to loop over all our products and map it to the product component. Instead of saying item.name equals the name within the Product component, the spread operator does this for us.
        })}
      </div>
    );
  }
}

export default Gallery;
