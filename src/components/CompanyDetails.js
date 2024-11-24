import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyDetails } from "../redux/companySlice";
import { useParams, Link } from "react-router-dom";

function CompanyDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(fetchCompanyDetails(id));
  }, [dispatch, id]);

  if (!details) return <p>Loading details...</p>;

  return (
    <div className="companyDetails">
      <h2>Company Name: {details.companyName}</h2>
      <p>Phone : {details.mobileNumber}</p>
      <p>Email : {details.email}</p>
      <p>GST No. : {details.gst_num}</p>
      <p>Address: {details.address}</p>
      <Link to="/">Back to list</Link>
    </div>
  );
}

export default CompanyDetails;
