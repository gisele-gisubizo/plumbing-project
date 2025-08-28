import React, { useState } from "react";

import styles from "../../styles/booking.module.css";

const Bookings = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 6;

  // Dummy booking data (replace with API later)
  const bookingsData = [
    { id: 1, customer: "John Doe", service: "Pipe Fixing", date: "2025-08-20", status: "Pending" },
    { id: 2, customer: "Jane Smith", service: "Sink Installation", date: "2025-08-19", status: "Confirmed" },
    { id: 3, customer: "Michael Brown", service: "Toilet Repair", date: "2025-08-18", status: "Completed" },
    { id: 4, customer: "Sarah Wilson", service: "Leak Detection", date: "2025-08-18", status: "Cancelled" },
    { id: 5, customer: "James Miller", service: "Water Heater", date: "2025-08-17", status: "Pending" },
    { id: 6, customer: "Emma Johnson", service: "Shower Repair", date: "2025-08-16", status: "Confirmed" },
    { id: 7, customer: "Liam Davis", service: "Pipe Replacement", date: "2025-08-15", status: "Completed" },
    { id: 8, customer: "Sophia Garcia", service: "Faucet Fix", date: "2025-08-15", status: "Pending" },
  ];

  // Filtered bookings
  const filteredBookings = bookingsData.filter((booking) =>
    booking.customer.toLowerCase().includes(search.toLowerCase()) ||
    booking.service.toLowerCase().includes(search.toLowerCase()) ||
    booking.status.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);
  const startIndex = (currentPage - 1) * bookingsPerPage;
  const displayedBookings = filteredBookings.slice(startIndex, startIndex + bookingsPerPage);

  return (
    <DashboardLayout>
      <div className={styles.bookingsContainer}>
        <div className={styles.header}>
          <h1>Bookings</h1>
          <input
            type="text"
            placeholder="Search bookings..."
            className={styles.searchBar}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.bookingsTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {displayedBookings.length > 0 ? (
                displayedBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.customer}</td>
                    <td>{booking.service}</td>
                    <td>{booking.date}</td>
                    <td>
                      <span className={`${styles.status} ${styles[booking.status.toLowerCase()]}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className={styles.noData}>
                    No bookings found
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
    </DashboardLayout>
  );
};

export default Bookings;
