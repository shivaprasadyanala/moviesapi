import React from 'react';
import './App.css';
import ReactPaginate from "react-paginate";
import Movies from './Movies';

import { useState, useEffect } from 'react';
function App() {
  const [pageCount, setPageCount] = useState(20);
  const [movies, setMovies] = useState([]);
  const [pageoffset, setpageOffset] = useState(1);

  useEffect(() => {
    fetch(`https://movie-task.vercel.app/api/popular?page=${pageoffset + 1}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, [pageoffset]);
  console.log(movies);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setpageOffset(event.selected);
  };

  return (
    <>
      {movies && <Movies movies={movies} />}
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={pageoffset}
      />
    </>
  );
}

export default App;
