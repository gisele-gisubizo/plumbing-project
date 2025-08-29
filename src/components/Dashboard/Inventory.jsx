import React, { useState } from "react";
import styles from "../../styles/inventory.module.css";

const Inventory = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Pipe Wrench", description: "Heavy-duty wrench for gripping pipes.", price: 25 },
    { id: 2, name: "PVC Cutter", description: "Cuts PVC pipes cleanly and easily.", price: 15 },
    { id: 3, name: "Plunger", description: "Standard plunger for unclogging drains.", price: 10 },
    { id: 4, name: "Drain Snake", description: "Flexible tool to remove clogs from pipes.", price: 30 },
    { id: 5, name: "Adjustable Spanner", description: "Multi-size wrench for plumbing fittings.", price: 20 },
    { id: 6, name: "Pipe Threader", description: "Used to cut threads on pipes.", price: 150 },
    { id: 7, name: "Pressure Gauge", description: "Measures water pressure in pipes.", price: 40 },
    { id: 8, name: "Water Pump", description: "Portable pump for water transfer.", price: 120 },
    { id: 9, name: "Compression Fitting Kit", description: "Kit for joining pipes securely.", price: 35 },
    { id: 10, name: "Pipe Wrench Set", description: "Set of multiple pipe wrenches for various sizes.", price: 60 },
  ]);

  const [editingItemId, setEditingItemId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedPrice, setEditedPrice] = useState("");

  const handleAdd = () => {
    const nextId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
    const newItem = {
      id: nextId,
      name: "New Tool/Equipment",
      description: "Description here",
      price: 0,
    };
    setItems([...items, newItem]);
    setEditingItemId(newItem.id);
    setEditedName(newItem.name);
    setEditedDescription(newItem.description);
    setEditedPrice(newItem.price);
  };

  const handleEdit = (item) => {
    setEditingItemId(item.id);
    setEditedName(item.name);
    setEditedDescription(item.description);
    setEditedPrice(item.price);
  };

  const handleSave = (id) => {
    setItems(items.map(i => i.id === id ? { ...i, name: editedName, description: editedDescription, price: Number(editedPrice) } : i));
    setEditingItemId(null);
  };

  const handleDelete = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div className={styles.inventoryContainer}>
      <div className={styles.header}>
        <h1>Plumbing Inventory</h1>
        <button onClick={handleAdd} className={styles.addBtn}>Add Item</button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.inventoryTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price ($)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.sort((a,b) => a.id - b.id).map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {editingItemId === item.id ? (
                    <input
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className={styles.editInput}
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td>
                  {editingItemId === item.id ? (
                    <input
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                      className={styles.editInput}
                    />
                  ) : (
                    item.description
                  )}
                </td>
                <td>
                  {editingItemId === item.id ? (
                    <input
                      type="number"
                      value={editedPrice}
                      onChange={(e) => setEditedPrice(e.target.value)}
                      className={styles.editInput}
                    />
                  ) : (
                    item.price
                  )}
                </td>
                <td className={styles.actionBtns}>
                  {editingItemId === item.id ? (
                    <button onClick={() => handleSave(item.id)} className={styles.saveBtn}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(item)} className={styles.editBtn}>Edit</button>
                  )}
                  <button onClick={() => handleDelete(item.id)} className={styles.deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan="5" className={styles.noData}>No items in inventory</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
