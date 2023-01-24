import { Item as ItemType } from "../services/item";

function Item({ item }: { item: ItemType }) {
    return (
        <div>
            Title: {item.title}; Author: {item.author}
        </div>
    );
}

export default Item;
