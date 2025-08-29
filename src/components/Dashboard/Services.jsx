import React, { useState } from "react";
import styles from "../../styles/services.module.css";

const Services = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Leak Detection & Repair", description: "Expert detection and repair of leaks." },
    { id: 2, name: "Pipe Installation & Replacement", description: "Professional installation and replacement of pipes." },
    { id: 3, name: "Drain Cleaning", description: "Efficient clearing of clogged drains." },
  ]);

  const [editingServiceId, setEditingServiceId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const handleAdd = () => {
    const nextId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
    const newService = {
      id: nextId,
      name: "New Service",
      description: "Service description",
    };
    setServices([...services, newService]);
    setEditingServiceId(newService.id);
    setEditedName(newService.name);
    setEditedDescription(newService.description);
  };

  const handleEdit = (service) => {
    setEditingServiceId(service.id);
    setEditedName(service.name);
    setEditedDescription(service.description);
  };

  const handleSave = (id) => {
    setServices(services.map(s => s.id === id ? { ...s, name: editedName, description: editedDescription } : s));
    setEditingServiceId(null);
  };

  const handleDelete = (id) => {
    setServices(services.filter(s => s.id !== id));
  };

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.header}>
        <h1>Services</h1>
        <button onClick={handleAdd} className={styles.addBtn}>Add Service</button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.servicesTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.sort((a,b) => a.id - b.id).map(service => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>
                  {editingServiceId === service.id ? (
                    <input
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className={styles.editInput}
                    />
                  ) : (
                    service.name
                  )}
                </td>
                <td>
                  {editingServiceId === service.id ? (
                    <input
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                      className={styles.editInput}
                    />
                  ) : (
                    service.description
                  )}
                </td>
                <td className={styles.actionBtns}>
                  {editingServiceId === service.id ? (
                    <button onClick={() => handleSave(service.id)} className={styles.saveBtn}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(service)} className={styles.editBtn}>Edit</button>
                  )}
                  <button onClick={() => handleDelete(service.id)} className={styles.deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
            {services.length === 0 && (
              <tr>
                <td colSpan="4" className={styles.noData}>No services found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
