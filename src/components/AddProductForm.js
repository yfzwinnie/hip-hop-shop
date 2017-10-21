import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';

class AddProductForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productName: '',
      link: '',
      image: '',
      description: '',
      price: '',
      category: '',
      fullWidth: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let target = event.target,
        name = target.name,
        value = target.value;

        this.setState({
          [name]: value
        });
  }

  handleSubmit() {
    console.log(this.state)
  }
  createProductPost(event) {
    event.preventDefault();
    const product = {
      productName: this.name.value,
      link: this.link.value,
      image: this.image.value,
      description: this.description.value,
      price: this.price.value,
      category: this.category.value,
      fullWidth: this.fullWidth.value,
    }
    this.props.addProductPost(product);//this is what's taking our product object (containing values we got from the form) and passing the product object to the addProductPost function (which will change the products state within the App component)
    this.productForm.reset(); //this line and the ref on 1ine 19 is to help us reset the empty the values on the form after user hits submit
  }

  render() {
    return(
      <div className="container">
        <h2>Add Product</h2>
        <form onSubmit={this.onSubmit} className="product-edit">
          <input 
            name="productName"
            value={this.state.productName}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Product Name"
          />
          <input
            name="link"
            value={this.state.link}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Product Link"
          />
          <input
            name="image"
            value={this.state.image}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Product Image"
          />
          <textarea ref={(input) => this.description = input} placeholder="Product Description"></textarea>
          <input
            name="price"
            value={this.state.image}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Product Price"
          />
          <label>Product Category<select ref={(input) => this.category = input}>
            <option value="Crib">Crib</option>
            <option value="Tech">Tech</option>
            <option value="Threads">Threads</option>
            <option value="Media">Media</option>
          </select></label>
          <label>Featured?<select ref={(input) => this.fullWidth = input}>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select></label>
          <button className="btn" type="submit"><FontAwesomeIcon iconDefinition={faPlus} /> Add Product</button>
        </form>
      </div>
    )
  }
}

export default AddProductForm;
