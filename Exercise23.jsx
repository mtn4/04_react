import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import store from "./store";
class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div>Homepage</div>
      </div>
    );
  }
}

class ProductDetails extends React.Component {
  state = { product: store[this.props.match.params.id - 1] };
  handleBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <div>{this.state.product.title}</div>
        <div>
          <img
            src={this.state.product.imageUrl}
            alt={this.state.product.title}
          />
        </div>
        <div>{this.state.product.price}</div>
        <div>{this.state.product.size}</div>
        <button onClick={this.handleBack} className="btn">
          Go Back
        </button>
      </div>
    );
  }

  //   render() {
  //     return (
  //       <div>

  //       </div>
  //     );
  //   }
}

class Products extends React.Component {
  state = { storeArr: [] };
  componentDidMount() {
    this.setState({ storeArr: store });
  }

  render() {
    return this.state.storeArr.map((product, index) => (
      <div key={product.id}>
        {/* <ProductDetails product={product} /> */}
        <Link
          key={product.id}
          to={`${this.props.location.pathname}/${product.id}`}
        >
          {product.title}
        </Link>
      </div>
    ));
  }
}

class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          gap: 20,
          height: 60,
          backgroundColor: "gray",
          alignItems: "center",
        }}
      >
        <div style={{ paddingLeft: 20 }}>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/products">Products</Link>
        </div>
      </div>
    );
  }
}

class ErrorHeader extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>404 - Not found</h3>
        </div>
        <Link to="/">Go to Homepage</Link>
      </div>
    );
  }
}

export class Exercise23 extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route component={ErrorHeader} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
