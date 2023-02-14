import React, {createContext, useState} from "react";
import Searchbar from "../components/Searchbar";
import BooksList from "../components/BooksList";


export const BooksContext = createContext();

export default function Home() {
    const [books, setBooks] = useState(null);

    return (
        <BooksContext.Provider value={[books, setBooks]}>
            <div id="home">
                <Searchbar />
                <BooksList />
            </div>
        </BooksContext.Provider>
    );
}