import React from "react";
// import "./ProductList.css";

const products = [
  { productName: "Rashmi", Course:"MERN" },
  { productName: "Shikha", Course:"FUll Stack"},
  { productName: "Naman", Course:"MERN"},
  { productName: "Aditya", Course:"Front-End" },
  { productName: "Shiva", Course:"Back-End"},
];
const withSearch = (WrappedComponent) => {
  class SearchFuctionality extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: "",
      };
    }
    updateSearch = (e) => {
      this.setState({ search: e.target.value });
    };
    filterProducts = () => {
      return products.filter((product) =>
        product.productName.toLowerCase().includes(this.state.search)
      );
    };
    render() {
      const updatedProducts = this.filterProducts();
      return (
        <div className="search">
          <input type="text" onChange={this.updateSearch} />
          <WrappedComponent products={updatedProducts}></WrappedComponent>
        </div>
      );
    }
  }
  return SearchFuctionality;
};
export default withSearch;