import React, { useEffect, useState } from "react";


export default function Saved() {
    const [books, setBooks] = useState(null);

    // Get books
    useEffect(() => {
        fetch ("/api/books", {method : "GET"})
            .then(res => res.json())
            .then(result => setBooks(result));
    }, []);

    // Render
    return (
        <div id="saved-books" className="scroll">
            <div className="scroll-inner">
                {
                    !books ? "Loading" : (
                        books.map((book, index) => (
                            book.is_saved && (
                                <a key={index} className="thumbnail" href={`/listen/${book._id}`} style={{backgroundImage: `url(${book.cover})`}}></a>
                            )
                        ))
                    )
                }
            </div>
        </div>
    );
}