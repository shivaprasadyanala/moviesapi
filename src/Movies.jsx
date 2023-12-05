import React from 'react'
import { useState } from 'react';
import Model from './Model';
import './App.css';
function Movies({ movies }) {

  const [model, setModel] = useState(false);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(2022);
  const [sm, setSm] = useState(false);

  return (
    <div className="App">
      <h1>hello welcome to movie listing</h1>
      <h3>Here you can get the names of movies as per the year you enter</h3>
      <div class="input-group mb-3 input">
        <input type="number" class="form-control" placeholder="enter movie release year" onChange={(e) => { setDate(e.target.value); setSm(false); }} />
        <div class="input-group-append">
          <button class="btn btn-primary" onClick={() => setSm(true)} type="button">find</button>
        </div>
      </div>
      <h3>click on the movie for further description</h3>
      <>
        <div className='movies'>
          {
            sm && movies.data.results
              .filter((mo) => mo.release_date.slice(0, 4) === date)
              .map((m) => {
                return (
                  <div className='movie' onClick={() => { setModel(m.id); setTimeout(() => setShow(true), [600]) }} >
                    {/* {link = } */}
                    <div><img src={`https://image.tmdb.org/t/p/original/${m.poster_path}`} alt="img" width="150px" /></div>
                    <p>title:{m.title}</p>
                    <p>release data:{m.release_date}</p>
                    <p>rating:{m.vote_average}</p>
                  </div>
                )

              })
          }
        </div>
        {!date && console.log("no movie")}
        {model &&
          <Model model={model} show={show} setShow={setShow} />}
      </>




    </div>
  );
}

export default Movies