import { useState } from "react";
import "../assets/css/Admin.css";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99", stock: 23 },
    { id: 2, name: "Smart Watch", price: "$149", stock: 12 },
    { id: 3, name: "Bluetooth Speaker", price: "$79", stock: 45 },
  ];

  const orders = [
    { id: 1, customer: "John Doe", total: "$248", status: "Delivered" },
    { id: 2, customer: "Jane Smith", total: "$149", status: "Pending" },
  ];

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul>
          <li
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={activeTab === "products" ? "active" : ""}
            onClick={() => setActiveTab("products")}
          >
            Products
          </li>
          <li
            className={activeTab === "orders" ? "active" : ""}
            onClick={() => setActiveTab("orders")}
          >
            Orders
          </li>
          <li
            className={activeTab === "users" ? "active" : ""}
            onClick={() => setActiveTab("users")}
          >
            Users
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="topbar">
          <h1>
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
        </header>

        <section className="content">
          {activeTab === "dashboard" && (
            <div className="cards">
              <div className="card">
                <h3>Total Sales</h3>
                <p>$12,430</p>
              </div>
              <div className="card">
                <h3>Orders</h3>
                <p>234</p>
              </div>
              <div className="card">
                <h3>Products</h3>
                <p>56</p>
              </div>
            </div>
          )}

          {activeTab === "products" && (
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>{p.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === "orders" && (
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.customer}</td>
                    <td>{o.total}</td>
                    <td>{o.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === "users" && (
            <div className="info-text">User management coming soon...</div>
          )}
        </section>
      </main>
    </div>
  );
}
