import React, { Fragment } from "react";

import Input from "../components/Input";
import Button from "../components/Button";

import { useMutation} from "@apollo/client";
import { REGISTER_NEW_USER, LOGIN_WITH_TOKEN } from '../variables-graphql/variables-gql'

import "../index.scss";


const Login = ({ history }) => {
  const [ login, setLogin ] = React.useState(true);
  const [ value, setValue ] = React.useState({});
  const [ errorSignup, setErrorSignup ] = React.useState([]);

  const [ register ] = useMutation(REGISTER_NEW_USER);
  const [ loginToken ] = useMutation(LOGIN_WITH_TOKEN);

  const SignIn = async (event, value) => {
    event.preventDefault();
    
    const res = await loginToken({ variables: value});
    // console.log(res);
    const { errors, success, token } = res.data.login;
    
    if(!success) {
      setErrorSignup(errors);
    } else {
      localStorage.setItem('token', token);
      history.push('/products');
    }
  }

  const registrarse = async (event, value) => {
    event.preventDefault();
    const res = await register({ variables: value});
    console.log(res)
    const { errors, success } = res.data.createUser;
    
    if(!success) {
      setErrorSignup(errors);
    } else {
      history.push('/products');
    }
  };

  const handleChange = (event)=>{
    setValue({
        ...value,
        [event.target.name] : event.target.value
    });
    // console.log(value);
  }

  return (
    <div className="container-custom">
      <form className="register-forms" onSubmit={login ? (event)=> SignIn(event, value) : (event)=> registrarse(event, value)}>
        <img
          src="https://www.pngkey.com/png/full/251-2510316_seamless-ecommerce-middle-east-e-commerce-logo-png.png"
          alt="logo"
        />
        <h1>{login ? "Iniciar sesión" : "Regístrate"}</h1>
        {
          errorSignup ? (
            <Fragment> 
              {errorSignup.map( (error, index) => (
              <p className="errors-validator" key={index}> [{error.path}]: {error.message} </p>
              
            ))} </Fragment>
          ) : null
        }
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
          disabled={login ? !value.email || !value.password : !value.email || !value.firstName || !value.lastName || !value.password}
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
