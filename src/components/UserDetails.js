import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../redux/userSlice";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUserDetails(id));
  }, [dispatch, id]);

  if (!details) return <p>Loading user details...</p>;

  return (
    <div className="userDetails">
      <h2>User Name: {details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Phone: {details.mobileNumber}</p>
      <p>Currency: {details.currency}</p>

      <Link to="/users">Back to user list</Link>
    </div>
  );
}

export default UserDetails;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { fetchUserDetails } from "../redux/userSlice";
// import { fetchUsersByCompany } from "../redux/userSlice";
// import { useParams, Link } from "react-router-dom";

// function UserDetails() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { details } = useSelector((state) => state.users);

//   useEffect(() => {
//     dispatch(fetchUsersByCompany(id));
//   }, [dispatch, id]);

//   if (!details) return <p>Loading user details...</p>;

//   return (
//     <div>
//       <h1>{details.name}</h1>
//       <p>Email: {details.email}</p>
//       <p>Address: {details.address}</p>
//       <p>Phone: {details.phone}</p>
//       <Link to={`/company/${details.companyId}/users`}>Back to Users</Link>
//     </div>
//   );
// }

// export default UserDetails;
