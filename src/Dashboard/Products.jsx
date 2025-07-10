import React, { useState } from 'react';
import '../styles/productsDashboard.css';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Copper Pipes', category: 'Pipes', status: 'in-stock', price: '$10', stock: 50 },
    { id: 2, name: 'Chrome Fixtures', category: 'Fixtures', status: 'low-stock', price: '$15', stock: 5 },
    { id: 3, name: 'Pipe Wrench', category: 'Tools', status: 'out-of-stock', price: '$25', stock: 0 },
    { id: 4, name: 'PVC Valves', category: 'Valves', status: 'in-stock', price: '$5', stock: 30 },
    { id: 5, name: 'Fitting Connectors', category: 'Fittings', status: 'low-stock', price: '$8', stock: 3 },
  ]);

  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Pipes',
    status: 'in-stock',
    price: '',
    stock: '',
  });

  const itemsPerPage = 3;
  const categories = ['Pipes', 'Fixtures', 'Tools', 'Valves', 'Fittings'];
  const statuses = ['in-stock', 'low-stock', 'out-of-stock'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'category') setFilterCategory(value);
    if (name === 'status') setFilterStatus(value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price && newProduct.stock) {
      setProducts([
        ...products,
        {
          id: products.length + 1,
          ...newProduct,
          stock: parseInt(newProduct.stock, 10),
        },
      ]);
      setNewProduct({ name: '', category: 'Pipes', status: 'in-stock', price: '', stock: '' });
    }
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filterCategory === '' || product.category === filterCategory) &&
      (filterStatus === '' || product.status === filterStatus)
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price') return parseFloat(a.price.split(' - ')[0].replace('$', '')) - parseFloat(b.price.split(' - ')[0].replace('$', ''));
    if (sortBy === 'stock') return a.stock - b.stock;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="products-container">
      <h1 className="page-title">Product Inventory Management</h1>
      <p className="products-note">Manage plumbing supplies as of 06:44 PM CAT, July 10, 2025.</p>

      {/* Filter and Sort Section */}
      <div className="filter-sort-section">
        <select name="category" value={filterCategory} onChange={handleFilterChange} className="filter-select">
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select name="status" value={filterStatus} onChange={handleFilterChange} className="filter-select">
          <option value="">All Statuses</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status.replace('-', ' ').charAt(0).toUpperCase() + status.replace('-', ' ').slice(1)}
            </option>
          ))}
        </select>
        <select value={sortBy} onChange={handleSortChange} className="filter-select">
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
          <option value="stock">Sort by Stock</option>
        </select>
      </div>

      {/* Products Table */}
      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Price</th> {/* Changed from "Price Range" */}
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.status.replace('-', ' ').charAt(0).toUpperCase() + product.status.replace('-', ' ').slice(1)}</td>
                <td>{product.price}</td> {/* Changed from displaying as "Price Range: ..." */}
                <td>{product.stock}</td>
                <td>
                  <button className="action-btn">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>

      {/* Add New Product Form */}
      <div className="add-product-section">
        <h2 className="add-product-title">Add New Product</h2>
        <form onSubmit={handleAddProduct} className="add-product-form">
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleNewProductChange}
            placeholder="Product Name (e.g., Copper Pipes)"
            className="form-input"
            required
          />
          <select
            name="category"
            value={newProduct.category}
            onChange={handleNewProductChange}
            className="form-select"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            name="status"
            value={newProduct.status}
            onChange={handleNewProductChange}
            className="form-select"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status.replace('-', ' ').charAt(0).toUpperCase() + status.replace('-', ' ').slice(1)}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="price"
            value={newProduct.price}
            onChange={handleNewProductChange}
            placeholder="Price (e.g., $10)" // Changed from "Price Range"
            className="form-input"
            required
          />
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleNewProductChange}
            placeholder="Stock Quantity"
            className="form-input"
            required
          />
          <button type="submit" className="add-product-btn">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Products;