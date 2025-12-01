import { useState } from 'react';
import ListItem from '../../src/ListItem';
import Button from '../../src/Button';

function ListContainer() {
    const [items, setItems] = useState([
        {text: "Implement the ListContainer", important: true},
        {text: "Set up Router", important: false },
        {text: "Fetch data from API", important: true },
    ]);

    const [InputValue, setInputValue] = useState("");

    function HandleAddItem() {
        if (!InputValue.trim()) return;

        setItems([
            ...items,
            {text: InputValue.trim(), important: false }
        ]);

        setInputValue("");
    }

    function handleKeyPressing(e) {
        if (e.key === 'Enter') {
            HandleAddItem();
        }
    }

    return (
        <div className="list-container">
            <h2>Tasks </h2>

            <div className='add-form'>
                <input
                type='text'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={handleKeyPressing}
                placeholder="Add a new task..."
                aria-label="New task input"
                />

                <Button onClick={handleAddItem}>Add Task</Button>
            </div>

            <ul className = 'item-list'>
                {items.map((item, index) =>  (
                <ListItem
                key={index}
                text={item.text}
                important={item.important}
                />
                ))}
            </ul>
        </div>
    );
}

export default ListContainer;