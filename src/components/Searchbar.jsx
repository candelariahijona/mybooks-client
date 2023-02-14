import React, {useContext} from "react";
import {BooksContext} from "../routes/Home";


function SearchBar() {
    const [books, setBooks] = useContext(BooksContext);

    // Search
    function search(e) {
        e.preventDefault();

        const keyword = document.getElementById("keyword").value;

        fetch(`/api/search/${keyword}`, {method : "GET"})
            .then(res => res.json())
            .then(result => setBooks(result));
    }

    // Render
    return (
        <form id="searchbar" onSubmit={search}>
            <input id="keyword" type="text" placeholder="Search..."></input>
            
            <button>
                <img src="Assets/Icons/Black/search.svg" />
            </button>
        </form>
    );
}

export default SearchBar;