import React from "react";
import withSearch from "./HOC";

class ProductList extends React.Component {
  render() {
    return (
      <div>
        {" "}
        {this.props.products.map((item) => {
          return (
            <p>
              {item.productName} {item.Course}{" "}
            </p>
          );
        })}
      </div>
    );
  }
}
export default withSearch(ProductList);