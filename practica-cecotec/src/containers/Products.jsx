import React from "react";
import { useQuery } from "@apollo/client";
import { Redirect } from 'react-router-dom';

import { GET_ALL_PRODUCTS } from "../variables-graphql/variables-gql";

// CSS
import "../index.scss";

// Components
import Navbar from "../components/Navbar";

const Products = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <Redirect to="/login" />;

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Productos más vendidos</h1>
        {data.allProducts.map(
          ({ _id, image, productName, description, price }) => (
            <div className="card mb-3" key={_id}>
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img src={image} className="card-img" alt={productName} />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h3 className="card-title">{productName}</h3>
                    <p className="card-text">Descripción: {description}</p>
                    <p className="card-text boton-price">Precio: {price} </p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
