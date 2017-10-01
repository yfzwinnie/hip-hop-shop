import React from 'react';
// import logo from './logo.svg';
import products from '../sampledata';
import '../css/App.css';
import Header from './Header';
import Gallery from './Gallery';
import Admin from './Admin';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';
import PageNotFound from './PageNotFound';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addProductPost = this.addProductPost.bind(this);

    this.state = {
        products: products
    };
  }

  addProductPost(product) {

    const products = [...this.state.products];
    products.unshift(product);

    this.setState({ products })
  }

  render() {
    return (
      <div>
        <Header products={this.state.products} />
        <div className="container">
          <Switch>
            <Route path="/" exact
                render={(props) => <Gallery products={this.state.products} {...props} />}
            />
            <Route path="/admin" exact
                render={() => <Admin products={this.state.products} addProductPost={this.addProductPost}/>}
            />
            <Route path="/signup" exact
                render={() => <SignUpForm />}
            />
            <Route path="/login" exact
                render={() => <LogInForm />}
            />
            <Route render={() => <PageNotFound />}/>
          </Switch>
          
        </div>
      </div>
    );
  }
}

export default App;
