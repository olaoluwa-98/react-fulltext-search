import { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import { Item as ItemType, search } from "./services/item";

function App() {
    const [query, setQuery] = useState("");
    const [items, setItems] = useState<ItemType[]>([]);
    return (
        <div className="App">
            <header className="App-header">
                <p>FULLTEXT Search</p>
                <p>Please enter a search term</p>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        search(query).then(setItems);
                    }}
                >
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>

                <div>
                    <p>Results:</p>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                <Item item={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default App;
