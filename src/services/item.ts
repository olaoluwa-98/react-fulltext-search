export interface Item {
    id: string;
    title: string;
    author: string;
    read: boolean;
    createdAt: string;
}

export const search = async (query: string): Promise<Item[]> => {
    const res = await fetch(
        `http://0.0.0.0:8080/items/search?query=${query}`
    ).then((res) => res.json());
    return res;
};
