import React from "react";
import { useQuery} from "@apollo/client";
import { Link } from "react-router-dom";

// Variables gql
import { GET_ALL_USERS } from '../variables-graphql/variables-gql';

// CSS
import "../index.scss";

// Components
import Navbar from "../components/Navbar";


const UsersList = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <div className="container-acceso-denegado">
      <div className="acceso-denegado">
        <h1> Acceso denegado. </h1>
        <p> Para poder ver este contenido debes estar <Link to="/login">registrado o logueado</Link> . </p>
    </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      <h1>Users List</h1>
      {data.allUsers.map(({ _id, avatar, firstName, lastName, email}) => {
        
        return (
          <div className="user-panel" key={_id}>
            <img src={avatar} alt={firstName}/>
            <p>
              {firstName} {lastName}
            </p>
            <p> {email} </p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
