
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "../../styles/plumbers.module.css";

const Plumbers = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const plumbersPerPage = 6;

  // Dummy data (replace with API later)
  const plumbersData = [
    { id: 1, name: "John Doe", phone: "+250 788 123 456", email: "john@example.com", rating: 4.8, availability: "Available" },
    { id: 2, name: "Jane Smith", phone: "+250 788 234 567", email: "jane@example.com", rating: 4.6, availability: "Busy" },
    { id: 3, name: "Michael Brown", phone: "+250 788 345 678", email: "michael@example.com", rating: 4.9, availability: "Available" },
    { id: 4, name: "Sarah Wilson", phone: "+250 788 456 789", email: "sarah@example.com", rating: 4.5, availability: "Unavailable" },
    { id: 5, name: "James Miller", phone: "+250 788 567 890", email: "james@example.com", rating: 4.7, availability: "Available" },
    { id: 6, name: "Emma Johnson", phone: "+250 788 678 901", email: "emma@example.com", rating: 4.4, availability: "Busy" },
    { id: 7, name: "Liam Davis", phone: "+250 788 789 012", email: "liam@example.com", rating: 4.9, availability: "Available" },
    { id: 8, name: "Sophia Garcia", phone: "+250 788 890 123", email: "sophia@example.com", rating: 4.3, availability: "Unavailable" },
  ];

  // Filtered plumbers
  const filteredPlumbers = plumbersData.filter((plumber) =>
    plumber.name.toLowerCase().includes(search.toLowerCase()) ||
    plumber.email.toLowerCase().includes(search.toLowerCase()) ||
    plumber.phone.includes(search) ||
    plumber.availability.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPlumbers.length / plumbersPerPage);
  const startIndex = (currentPage - 1) * plumbersPerPage;
  const displayedPlumbers = filteredPlumbers.slice(startIndex, startIndex + plumbersPerPage);

  return (
    <div className={styles.plumbersContainer}>
      <div className={styles.header}>
        <h1>Plumbers</h1>
        <div className={styles.searchWrapper}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search plumbers..."
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
        <table className={styles.plumbersTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Rating</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedPlumbers.length > 0 ? (
              displayedPlumbers.map((plumber) => (
                <tr key={plumber.id}>
                  <td>{plumber.id}</td>
                  <td>{plumber.name}</td>
                  <td>{plumber.phone}</td>
                  <td>{plumber.email}</td>
                  <td>{plumber.rating}</td>
                  <td>
                    <span className={`${styles.status} ${styles[plumber.availability.toLowerCase()]}`}>
                      {plumber.availability}
                    </span>
                  </td>
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
                  No plumbers found
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
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Plumbers;
