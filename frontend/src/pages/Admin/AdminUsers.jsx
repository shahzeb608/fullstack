import React, { useEffect, useState } from "react";

const AdminUsers = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");


  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/admin/users", {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  const handleBanUser = async (userId) => {
    try {
      const token = localStorage.getItem("token"); 
      const response = await fetch(`http://localhost:8000/api/admin/users/${userId}/ban`, {
        method: "PATCH", 
        headers: {
          "Authorization": `Bearer ${token}`, 
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to ban user");
      }
  
      const data = await response.json();
      console.log("User banned:", data);
  
      setUsers(users.map(user => user._id === userId ? { ...user, isBanned: true } : user));
  
    } catch (error) {
      console.error("Ban User Error:", error);
    }
  };
  

  
  const handleUnbanUser = async (userId) => {
    if (!window.confirm("Are you sure you want to unban this user?")) return;
  
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
  
      const response = await fetch(`http://localhost:8000/api/admin/users/${userId}/unban`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      });
  
      const data = await response.json(); 
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to unban user");
      }
  
      alert("User unbanned successfully");
      fetchUsers(); 
    } catch (error) {
      console.error("Unban User Error:", error);
      alert(error.message);
    }
  };
  
  

  
  const handleDeleteUser = async (userId) => {
    try {
      const token = localStorage.getItem("token"); 
  
      const response = await fetch(`http://localhost:8000/api/admin/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`, 
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
  
      const data = await response.json();
      console.log("User deleted:", data);
  
      setUsers(users.filter(user => user._id !== userId)); 
    } catch (error) {
      console.error("Delete User Error:", error);
    }
  };
  

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!users || users.length === 0) return <p>No users found.</p>;

  return (
    <div>
      <h2>Manage Users</h2>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id || index}>
                <td>{user.name || "N/A"}</td>
                <td>{user.email || "N/A"}</td>
                <td>{user.role || "N/A"}</td>
                <td>{user.isBanned ? "Banned" : "Active"}</td>
                <td>
                  {user.isBanned ? (
                    <button onClick={() => handleUnbanUser(user._id)} style={{ backgroundColor: "green", color: "white" }}>
                      Unban
                    </button>
                  ) : (
                    <button onClick={() => handleBanUser(user._id)} style={{ backgroundColor: "red", color: "white" }}>
                      Ban
                    </button>
                  )}
                  <button onClick={() => handleDeleteUser(user._id)} style={{ backgroundColor: "black", color: "white", marginLeft: "5px" }}>
                    Delete
                  </button>
                </td>
              </tr> 
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default AdminUsers;
