import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersByCompany } from "../redux/userSlice";
import { useParams, Link } from "react-router-dom";

function UsersByCompany() {
  const { companyId } = useParams(); // Get companyId from the URL
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsersByCompany(companyId));
  }, [dispatch, companyId]);

  if (status === "loading") return <p>Loading users...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Users of Company {companyId}</h1>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Company List</Link>
    </div>
  );
}

export default UsersByCompany;
