import ListItem from "./ListItem";
import Button from "./Button";

const Home = ({ items, inputValue, setInputValue, HandleAddItem }) => {
    return (
        <div>
            <h1> List: </h1>
            {items.map((item, index) => (
                <ListItem key={index} text={item.text} important={item.important} />
            ))}

                    <input 
        type="text"
        value={inputValue}
        onChange={e=> setInputValue(e.target.value)}
        placeholder="Put new Item"
        />
        <Button onClick={HandleAddItem}>Add Item</Button>
        </div>


    );
};

export default Home;