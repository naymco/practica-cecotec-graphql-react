import React from "react";
import { useQuery, gql } from "@apollo/client";

// CSS
import "../index.scss";

// Components
import Navbar from "../components/Navbar";

const GET_ALL_PRODUCTS = gql`
{
    allProducts{
        _id
      productName 
      description 
      price
    }
  }
`;

const Products = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error D:</p>;

  return (
    <div>
      <Navbar />
      <h1>Users List</h1>
      {data.allProducts.map((products) => {
        console.log(products);
        return (
          <div key={products._id}>
            <p>
             Nombre del producto: {products.productName} 
            </p>
            <p>Descripción: {products.description} </p>
            <p>Precio: {products.price} </p>
            <hr/>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
