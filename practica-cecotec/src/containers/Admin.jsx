import React from 'react';
import { Link } from 'react-router-dom';

import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS, CREATE_NEW_PRODUCT } from '../variables-graphql/variables-gql';

// Components
import Navbar from '../components/Navbar';
import Input from "../components/Input";
import Button from "../components/Button";

const Admin = ()=>{
  const [ value, setValue ] = React.useState({});
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  const [ newProduct ] = useMutation(CREATE_NEW_PRODUCT);
  const products = data?.allProducts;
  const [ product, setProduct ] = React.useState([]);

  React.useEffect(()=>{
    setProduct(products);
  }, [products])

  
  // console.log(product)
  const handleChange = (event)=>{
    setValue({
         ...value,
        [event.target.name] : event.target.value
    });
  }

  const addProduct = async (event, value) =>{
    event.preventDefault();
    const res = await newProduct({ variables: value });
    console.log(res);
    setProduct([
      ...product,
      value
    ]);

     console.log(product)
  }

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div className="container-acceso-denegado">
        <div className="acceso-denegado">
          <h1> Acceso denegado. </h1>
          <p>   
            Para poder ver este contenido debes estar
            <Link to="/login">registrado o logueado</Link>.
          </p>
        </div>
      </div>
    );

  return(
    <div>
      <Navbar />
      <div className="container">
          <h1>Admin</h1>  
          <section className="container-panels">
            <article className="product-panel">
              <h3>Listado de productos</h3>
              <div className="list-title">
                
              <span>Producto</span>
              <span>Precio</span>
              </div>
              {
                product ? product.map(({ _id, productName, price}) =>(
                  <div key={_id} className="list-product" >
                      
                      <span> {productName} </span>
                      <span> {price} €</span>
                  </div>
                )) : null
              }
            </article>

            <article className="form-panel">
              <h3>Agrega un producto</h3>
              
               <form onSubmit={(event)=> addProduct(event, value)}>
               <Input name="productName" type="text" placeholder="Nombre del producto"  onChange={handleChange} />
                <Input name="description" type="text" placeholder="Descripción del producto"  onChange={handleChange} />
                <Input name="image" type="text" placeholder="Url de la imagen del producto"  onChange={handleChange} />
                <Input name="price" type="number" placeholder="Precio del producto"  onChange={handleChange} />

                <Button type="submit" className="btn-success" value="Agregar producto"/>
               </form>
            </article>
          </section>

      </div>
    </div>
  );
};

export default Admin;