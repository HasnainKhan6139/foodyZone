import React, { useState } from "react";
import Navbar from "./components/Navbar";
import All from "./components/All";
import FoodItems from "./components/FoodItems";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2940&auto=format&fit=crop')",
      }}
    >
      <Navbar onFilter={setSelectedCategory} />
      <div className="bg-white bg-opacity-80 p-6 rounded-lg min-h-screen">
        <All selectedCategory={selectedCategory} />
        <FoodItems/>

      </div>
    </div>
  );
}

export default App;
