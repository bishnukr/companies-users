import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
// import { fetchUsersByCompany } from "../redux/userSlice";
import { Link } from "react-router-dom";

function UserList() {
  const dispatch = useDispatch();

  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="userHeading">User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="userList">
            <p style={{ fontSize: "15px", marginBottom: "10px" }}>
              Cllick and Get /user details
            </p>
            <Link to={`/user/${user.id}`} className="userName">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
