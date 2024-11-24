import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import CompanyList from "./components/CompanyList";
import CompanyDetails from "./components/CompanyDetails";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
// import UsersByCompany from "./components/UsersByCompany";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav className="main">
          <Link to="/" className="companies">
            Companies
          </Link>{" "}
          |{" "}
          <Link to="/users" className="users">
            Users
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<CompanyList />} />
          <Route path="/company/:id" element={<CompanyDetails />} />
          <Route path="/users" element={<UserList />} />
          {/* <Route
            path="/company/:companyId/users"
            element={<UsersByCompany />}
          /> */}
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
