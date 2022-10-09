import React, { useState } from "react";
import { useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return <div>Users</div>;
};

export default Users;
