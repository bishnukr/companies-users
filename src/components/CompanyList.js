import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../redux/companySlice";
import { Link } from "react-router-dom";

function CompanyList() {
  const dispatch = useDispatch();
  const { companyList, status, error } = useSelector(
    (state) => state.companies
  );

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="heading">Company List</h1>
      <ul>
        {companyList.map((company) => {
          return (
            <>
              <li key={company.id} className="companyList">
                <p className="companyName">{company.companyName}</p>
                <p className="companyLink">
                  {" "}
                  <Link to={`/company/${company.id}`} className="comLink">
                    Company Details
                  </Link>
                </p>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default CompanyList;
