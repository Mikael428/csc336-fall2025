import { useState } from "react";
import ListItem from "./ListItem";

function CityList() {
  // 1. Create a List Stored in State
  const [items, setItems] = useState([
    { text: "Tokyo, Japan", important: true },
    { text: "New York City, USA", important: false },
    { text: "Paris, France", important: true },
    { text: "Sydney, Australia", important: false },
  ]);

  // State for the input field
  const [inputValue, setInputValue] = useState("");

  // 3. Add New Items - Handler function
  function handleAdd() {
    if (inputValue.trim() === "") return; // Prevent adding empty items
    setItems([...items, { text: inputValue.trim(), important: false }]);
    setInputValue("");
  }

  // Handle enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="city-list-container">
      <h2>🌍 Favorite Cities List</h2>
      
      {/* Input and Button for Adding Items */}
      <div className="add-item-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new city..."
        />
        <button onClick={handleAdd}>Add City</button>
      </div>
      
      {/* 2. Display the List */}
      <ul className="list-items-container">
        {items.map((item, index) => (
          <ListItem
            key={index}
            text={item.text}
            important={item.important} // Prop to influence ListItem appearance
          />
        ))}
      </ul>
      <p className="list-note">**Items highlighted in yellow are considered "Important" destinations!**</p>
    </div>
  );
}

export default CityList;