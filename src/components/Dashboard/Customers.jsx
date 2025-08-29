
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "../../styles/customers.module.css";

// Dummy customers data (extracted from bookings)
const customersData = [
  {
    id: 1,
    name: "John Doe",
    phone: "+250 788 123 456",
    lastService: ["Leak Detection & Repair"],
    estimate: 150,
    paid: 150,
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+250 788 234 567",
    lastService: ["Drain Cleaning", "Pipe Installation & Replacement"],
    estimate: 400,
    paid: 350,
  },
  {
    id: 3,
    name: "Michael Brown",
    phone: "+250 788 345 678",
    lastService: ["Water Heater Services"],
    estimate: 250,
    paid: 250,
  },
  // Add more dummy customers here
];

const Customers = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 6;

  // Filtered customers
  const filteredCustomers = customersData.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase()) ||
    customer.phone.includes(search) ||
    customer.lastService.join(", ").toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);
  const startIndex = (currentPage - 1) * customersPerPage;
  const displayedCustomers = filteredCustomers.slice(startIndex, startIndex + customersPerPage);

  return (
    <div className={styles.customersContainer}>
      <div className={styles.header}>
        <h1>Customers</h1>
        <div className={styles.searchWrapper}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search customers..."
            className={styles.searchBar}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.customersTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th style={{ minWidth: "160px" }}>Phone</th>
              <th>Last Service</th>
              <th>Estimated Cost ($)</th>
              <th>Paid ($)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedCustomers.length > 0 ? (
              displayedCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.lastService.join(", ")}</td>
                  <td>{customer.estimate}</td>
                  <td>{customer.paid}</td>
                  <td>
                    <div className={styles.actionBtns}>
                      <button className={styles.viewBtn}>View</button>
                      <button className={styles.editBtn}>Edit</button>
                      <button className={styles.deleteBtn}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className={styles.noData}>
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Customers;
