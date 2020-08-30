import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { GET_ALL_PRODUCTS } from '../variables-graphql/variables-gql'

// CSS
import "../index.scss";

// Components
import Navbar from "../components/Navbar";

const Products = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div className="container-acceso-denegado">
        <div className="acceso-denegado">
          <h1> Acceso denegado. </h1>
          <p>
            
            Para poder ver este contenido debes estar{" "}
            <Link to="/login">registrado o logueado</Link> .{" "}
          </p>
        </div>
      </div>
    );

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Productos más vendidos</h1>
        {data.allProducts.map(({ _id, image, productName, description, price}) => {
          
          return (
            <div className="card mb-3" key={_id}>
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img
                    src={image}
                    className="card-img"
                    alt={productName}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h3 className="card-title">{productName}</h3>
                    <p className="card-text">
                      Descripción: {description}
                    </p>
                    <p className="card-text boton-price">Precio: {price} </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
