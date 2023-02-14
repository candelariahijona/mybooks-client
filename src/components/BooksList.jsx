import React, {useEffect, useContext} from "react";
import {BooksContext} from "../routes/Home";


export default function BooksList() {
    const [books, setBooks] = useContext(BooksContext);

    useEffect(() => {
        fetch("/api/books", {method : "GET"})
            .then(res => res.json())
            .then(result => setBooks(result));
    }, []);

    return (
        <div id="books-list" className="scroll">
            <div className="scroll-inner">
                {
                    !books ? <p>Loading</p> : ( books.length == 0 ? <p>We couldn’t find a book with that name 🧐</p> : (
                        books.map((book, index) => (
                            <a key={index} className="book" href={`/listen/${book._id}`}>
                                <div className="cover" style={{backgroundImage: `url(${book.cover})`}}> 
                                    {book.is_bestseller && <p>BestSeller</p>}                 
                                </div>

                                <div className="content">
                                    <h2>{book.name} ({book.year})</h2> 
                                    <p>By <span>{book.author}</span></p>
                                    <span>{book.description}</span>
                                </div>
                            </a>
                        ))
                    ))
                }
            </div>
        </div> 
    ) 
};

