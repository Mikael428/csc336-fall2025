import { useState } from 'react'

import ListItem from "./ListItem";
import './App.css'

function App() {
  const [items, setItems] = useState([
    {text: "Basics in Everything", important: true, category: "Work"},
    {text: "Finish Movie", important: false, category: "Personal"},
    {text: "Workout for one Hour", important: true, category: "Health"},
    {text: "Call Parents", important: false, category: "Personal"},
  
  ]);

  const [inputValue, setInputValue] = useState("");

  function getCategory(text) {
    const lowerText = text.toLowerCase();

    if (lowerText.includes("email") || lowerText.includes("report") || lowerText.includes("meeting")) {
      return "Work";
    }
    
    if (lowerText.includes("gym") || lowerText.includes("workout") || lowerText.includes("doctor")) {
      return "Health";
      return "High Priority";
    }

    if (lowerText.includes("shop") || lowerText.includes("cook") || lowerText.includes("clean")) {
      return "Personal";
    }
    
    return "New"; 
  }
  

  function handleAdd() {
    if (inputValue.trim() === "") return; 

    const isImportant = inputValue.includes("!");

    const itemCategory = getCategory(inputValue.trim());

    setItems([
      ...items,
      {
        text: inputValue.trim(),
        important: isImportant,
        category: itemCategory
      }
    ]);
    


    setInputValue("");
  }

  return(
    <div className="app-container">
      <h1 className="app-title"> List for Priorities</h1>

      <div className="add-form">
        <input
          type="text"
          placeholder="Add new tasks"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAdd();
            }
          }}
          className="input-field"
          />
          <button
            onClick={handleAdd}
            className="add-button"
            >
              Add Item
              </button>
              </div>

              <div className="list-container">
                {items.map((item, index) => (
                  <ListItem
                  key={index}
                  text={item.text}
                  important={item.important}
                  category={item.category}
                  />
                ))}
                </div>
                </div>
  );
}

export default App;