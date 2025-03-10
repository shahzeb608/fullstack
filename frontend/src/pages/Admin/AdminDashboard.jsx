import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <div className="admin-content">
        <h2>Admin Dashboard</h2>
        <div className="admin-links">
          <Link to="/admin/products">Manage Products</Link>
          <Link to="/admin/orders">Manage Orders</Link>
          <Link to="/admin/users">Manage Users</Link>
        </div>
      </div>
    
    </>
  );
};

export default AdminDashboard;
