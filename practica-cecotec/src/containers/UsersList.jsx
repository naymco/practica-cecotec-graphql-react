import React from "react";
import { useQuery } from "@apollo/client";
import { Redirect } from 'react-router-dom';

// Variables gql
import { GET_ALL_USERS } from "../variables-graphql/variables-gql";

// CSS
import "../index.scss";

// Components
import Navbar from "../components/Navbar";

const UsersList = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <Redirect to="/login" />;

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Users List</h1>
        {data.allUsers.map(({ _id, avatar, firstName, lastName, email }) => (
          <div key={_id} className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img className="card-img" src={avatar} alt={firstName} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">
                    {firstName} {lastName}
                  </h3>
                  <p className="card-text"> {email} </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
