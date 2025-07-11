import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import '../styles/inventory.css';

const Inventory = () => {
  const { theme } = useTheme();
  const [inventory, setInventory] = useState([
    { id: 1, name: 'PVC Pipe (1 inch)', category: 'Pipes', stock: 50, threshold: 10, supplier: 'PipeCo', price: 5.99 },
    { id: 2, name: 'Wrench Set', category: 'Tools', stock: 5, threshold: 3, supplier: 'ToolMaster', price: 29.99 },
    { id: 3, name: 'Teflon Tape', category: 'Sealing', stock: 100, threshold: 20, supplier: 'SealTech', price: 1.49 },
    { id: 4, name: 'Copper Elbow (90°)', category: 'Fittings', stock: 15, threshold: 5, supplier: 'FitRight', price: 3.99 },
  ]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', category: 'Pipes', stock: 0, threshold: 0, supplier: '', price: 0 });

  useEffect(() => {
    const now = new Date();
    const filtered = inventory.filter((item) => {
      const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredInventory(filtered);
  }, [filterCategory, searchTerm, inventory]);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.supplier && newItem.stock >= 0 && newItem.threshold >= 0 && newItem.price >= 0) {
      setInventory([...inventory, { ...newItem, id: inventory.length + 1 }]);
      setNewItem({ name: '', category: 'Pipes', stock: 0, threshold: 0, supplier: '', price: 0 });
      setShowAddForm(false);
    }
  };

  const handleRemoveItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <div className="inventory-container">
      <h1 className="page-title">Inventory Management</h1>
      <p className="inventory-note">Track supplies as of 11:13 AM CAT, Friday, July 11, 2025.</p>

      <div className="inventory-filters">
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="filter-category">
          <option value="all">All Categories</option>
          <option value="Pipes">Pipes</option>
          <option value="Tools">Tools</option>
          <option value="Sealing">Sealing</option>
          <option value="Fittings">Fittings</option>
        </select>
        <div className="search-wrapper">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or supplier"
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>
        <button className="add-btn" onClick={() => setShowAddForm(true)}>
          <FaPlus /> Add Item
        </button>
      </div>

      {showAddForm && (
        <div className="add-form-overlay">
          <div className="add-form">
            <h2>Add New Item</h2>
            <form onSubmit={handleAddItem}>
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                placeholder="Item Name"
                required
                className="form-input"
              />
              <select
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                className="form-input"
              >
                <option value="Pipes">Pipes</option>
                <option value="Tools">Tools</option>
                <option value="Sealing">Sealing</option>
                <option value="Fittings">Fittings</option>
              </select>
              <input
                type="number"
                value={newItem.stock}
                onChange={(e) => setNewItem({ ...newItem, stock: parseInt(e.target.value) || 0 })}
                placeholder="Stock Level"
                required
                className="form-input"
              />
              <input
                type="number"
                value={newItem.threshold}
                onChange={(e) => setNewItem({ ...newItem, threshold: parseInt(e.target.value) || 0 })}
                placeholder="Reorder Threshold"
                required
                className="form-input"
              />
              <input
                type="text"
                value={newItem.supplier}
                onChange={(e) => setNewItem({ ...newItem, supplier: e.target.value })}
                placeholder="Supplier"
                required
                className="form-input"
              />
              <input
                type="number"
                step="0.01"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) || 0 })}
                placeholder="Price ($)"
                required
                className="form-input"
              />
              <div className="form-actions">
                <button type="submit" className="save-btn">
                  Save
                </button>
                <button type="button" className="cancel-btn" onClick={() => setShowAddForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="inventory-table">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Threshold</th>
              <th>Supplier</th>
              <th>Price ($)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item) => (
              <tr key={item.id} className={item.stock <= item.threshold ? 'low-stock' : ''}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td>{item.threshold}</td>
                <td>{item.supplier}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button className="action-btn edit" onClick={() => alert(`Edit ${item.name}`)}>
                    <FaEdit /> Edit
                  </button>
                  <button className="action-btn remove" onClick={() => handleRemoveItem(item.id)}>
                    <FaTrash /> Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;