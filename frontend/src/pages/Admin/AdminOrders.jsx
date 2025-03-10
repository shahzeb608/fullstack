import React, { useEffect, useState } from "react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await fetch("/api/orders/all", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setOrders(data.data);
  };

  const updateOrderStatus = async (id, status) => {
    await fetch(`/api/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    fetchOrders(); 
  };

  return (
    <div>
      <h2>Manage Orders</h2>
      <table>
        <thead>
          <tr><th>Order ID</th><th>Status</th><th>Update</th></tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.status}</td>
              <td>
                <select onChange={(e) => updateOrderStatus(order._id, e.target.value)}>
                  <option>Pending</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
