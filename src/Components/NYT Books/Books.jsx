import React, { useEffect, useState } from 'react';
import Books from './books';
import axios from 'axios';

const Book = () => {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            setLoading(true);
            const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
            setBooks(res.data.response.docs);

            setLoading(false);
        };
        getBooks();

      }, []);
    return (
        <div>
            <Books loading={loading} books={books} />
        </div >
    );
};

export default Book;