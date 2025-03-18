import React, { useState, useEffect } from "react";

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "", category: "" });
  const [editingId, setEditingId] = useState(null);
  const [deleteId, setDeleteId] = useState(null); // Store item to delete

  // Load data from localStorage on mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("foodItems")) || [];
    setFoodItems(storedItems);
  }, []);

  // Save to localStorage whenever foodItems change
  useEffect(() => {
    localStorage.setItem("foodItems", JSON.stringify(foodItems));
  }, [foodItems]);

  // Handle input change
  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  // Add or update item
  const handleSave = () => {
    if (!newItem.name || !newItem.price) return;

    if (editingId) {
      // Update existing item
      const updatedItems = foodItems.map((item) =>
        item.id === editingId ? { ...item, ...newItem } : item
      );
      setFoodItems(updatedItems);
      setEditingId(null);
    } else {
      // Add new item
      const updatedItems = [...foodItems, { ...newItem, id: Date.now() }];
      setFoodItems(updatedItems);
    }

    setNewItem({ name: "", price: "", category: "" });
  };

  // Edit item
  const handleEdit = (item) => {
    setEditingId(item.id);
    setNewItem({ name: item.name, price: item.price, category: item.category });
  };

  // Show delete confirmation modal
  const confirmDelete = (id) => {
    setDeleteId(id);
  };

  // Delete item if confirmed
  const handleDelete = () => {
    setFoodItems(foodItems.filter((item) => item.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Manage Food Items</h2>

      {/* Form to Add or Edit Item */}
      <div className="flex gap-4 mt-4">
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Food Name"
          className="border p-2"
        />
        <input
          type="number"
          name="price"
          value={newItem.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2"
        />
        <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* List Items */}
      <div className="mt-6">
        {foodItems.map((item) => (
          <div key={item.id} className="flex justify-between bg-gray-100 p-3 my-2 rounded">
            <span>{item.name} - ${item.price}</span>
            <div className="space-x-2">
              <button onClick={() => handleEdit(item)} className="bg-yellow-500 text-white p-1 rounded">
                Edit
              </button>
              <button onClick={() => confirmDelete(item.id)} className="bg-red-500 text-white p-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {/* Delete Confirmation Modal */}
{deleteId !== null && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Modal Box */}
    <div className="relative bg-white p-6 rounded-lg shadow-lg text-center z-50">
      <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
      <p className="text-gray-700">Do you really want to delete this item?</p>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
          Yes, Delete
        </button>
        <button onClick={() => setDeleteId(null)} className="bg-gray-400 text-white px-4 py-2 rounded">
          No, Cancel
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default FoodItems;
