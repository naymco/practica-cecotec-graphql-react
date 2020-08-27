import React from "react";
import { useQuery, gql } from "@apollo/client";

// CSS
import "../index.scss";

// Components
import Navbar from "../components/Navbar";

const GET_ALL_USERS = gql`
  {
    allUsers {
      _id
      firstName
      lastName
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error D:</p>;

  return (
    <div>
      <Navbar />
      <h1>Users List</h1>
      {data.allUsers.map((users) => {
        console.log(users);
        return (
          <div key={users._id}>
            <p>
              {users.firstName} - {users.lastName}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
