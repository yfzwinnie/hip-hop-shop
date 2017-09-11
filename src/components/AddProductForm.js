import React from 'react';

class AddProductForm extends React.Component {
  createProductPost(event) {
    event.preventDefault();
    const product = {
      name: this.name.value,
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
        <form ref={(input) => this.productForm = input} className="product-edit" onSubmit={(e) => this.createProductPost(e)}>
          <input ref={(input) => this.name = input} type="text" placeholder="Product Name"/>
          <input ref={(input) => this.link = input} type="text" placeholder="Product Link"/>
          <input ref={(input) => this.image = input} type="text" placeholder="Product Image"/>
          <textarea ref={(input) => this.description = input} placeholder="Product Description"></textarea>
          <input ref={(input) => this.price = input} type="text" placeholder="Product Price"/>
          <input ref={(input) => this.category = input} type="text" placeholder="Product Category"/>
          <label>Full Width?<select ref={(input) => this.fullWidth = input}>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select></label>
          <button type="submit">+ Add Product</button>
        </form>
      </div>
    )
  }
}

export default AddProductForm;
