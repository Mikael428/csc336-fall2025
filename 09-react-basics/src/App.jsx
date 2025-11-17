import { useState } from 'react'
import ListItem from './ListItem';
import Button from "./Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [items, setItems] = useState([
    { text: "Example Item", important: true}]);
  const [inputValue, setInputValue] = useState("");

  function Handle() {
    if(!inputValue.trim()) return;
    setItems([...items, { text: inputValue, important: false}]);
    setInputValue("");
  }

  return (
    <div>
      <h1>My List</h1>
        {items.map((item, index) => (
          <ListItem key={index} text={item.text} important={item.important} />
        ))}
        <input 
        type="text"
        value={inputValue}
        onChange={e=> setInputValue(e.target.value)}
        placeholder="Put new Item"
        />
        <Button onClick={Handle}>Add Item</Button>
        </div>
  );
}
export default App;

