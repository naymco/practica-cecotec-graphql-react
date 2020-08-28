import React, { Fragment } from "react";

// import Navbar from '../components/Navbar';
import Input from "../components/Input";
import Button from "../components/Button";

import { useMutation} from "@apollo/client";
import { REGISTER_NEW_USER } from '../variables-graphql/variables-gql'

import "../index.scss";


const Login = ({ history }) => {
  const [login, setLogin] = React.useState(true);
  const [ value, setValue ] = React.useState({});
  const [ register ] = useMutation(REGISTER_NEW_USER);

  const enviar = async (event, value) => {
    event.preventDefault();
    const res = await register({ variables: value});
    console.log("envando datos", res);
    history.push("/products");
    setValue({});
  };

  const handleChange = (event)=>{
    setValue({
        ...value,
        [event.target.name] : event.target.value
    });
    console.log(value);
  }

  return (
    <div className="container">
      <form className="register-form" onSubmit={(event)=> enviar(event, value)}>
        <img
          src="https://www.pngkey.com/png/full/251-2510316_seamless-ecommerce-middle-east-e-commerce-logo-png.png"
          alt="logo"
        />
        <h1>{login ? "Iniciar sesión" : "Regístrate"}</h1>
        {login ? (
          <Fragment>
            <Input type="text" placeholder="Email" name="email" onChange={handleChange} />
            <Input type="password" placeholder="Password" name="password" onChange={handleChange}/>
          </Fragment>
        ) : (
          <Fragment>
              <Input type="text" placeholder="Avatar" name="avatar" onChange={handleChange} />
            <Input type="text" placeholder="Email" name="email" onChange={handleChange} />
            <Input type="text" placeholder="Nombre" name="firstName" onChange={handleChange} />
            <Input type="text" placeholder="Apellidos" name="lastName" onChange={handleChange} />
            <Input type="password" placeholder="Password" name="password" onChange={handleChange} />
          </Fragment>
        )}

        <Button
          className="btn-success"
          value={login ? "Login" : "Register"}
          type="submit"
        />

        <Button
          onClick={() => setLogin(!login)}
          className="btn-primary"
          value={
            login
              ? "¿No tienes cuenta? Regístrate"
              : "¿Ya tienes una cuenta? Logueate"
          }
          type="button"
        />
      </form>
    </div>
  );
};

export default Login;
