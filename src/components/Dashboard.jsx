import React, { useState } from "react";
import FoodItems from "../components/FoodItems"; // Import CRUD component

const Dashboard = () => {
  const [showFoodItems, setShowFoodItems] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center">Dashboard</h1>

      <div className="text-center mt-4">
        <button
          onClick={() => setShowFoodItems(!showFoodItems)}
          className="bg-green-500 text-white p-2 rounded"
        >
          {showFoodItems ? "Hide CRUD Operations" : "Show CRUD Operations"}
        </button>
      </div>

      {showFoodItems && <FoodItems />}
    </div>
  );
};

export default Dashboard;
