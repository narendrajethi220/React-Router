import React from "react";
import { useParams } from "react-router-dom";
const UserDetails = () => {
  const userID = useParams();
  const id = userID.id;
  return (
    <div>
      <h3>Details Loading...{id}</h3>
    </div>
  );
};

export default UserDetails;
