import React from 'react'
import { useState } from 'react';
import Model from './Model';
import './App.css';
function Movies({ movies }) {
  // const [movies, setMovies] = useState([]);
  // const [loading] = useState(true);
  // const [error] = useState(true);
  const [model, setModel] = useState(false);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(2022);
  const [sm, setSm] = useState(false);
  // useEffect(() => {
  //  setTimeout(() => {
  //   fetch(' https://movie-task.vercel.app/api/popular?page=12')
  //    .then(response => {
  //     if (response.ok) {
  //      return response.json();
  //     }
  //     throw response;
  //    })
  //    .then(data => {
  //     console.log(data);
  //     setMovies(data)
  //    })
  //    .then(error => {
  //     console.error("error in fetching the data" + error);
  //     setError(error);
  //    })
  //    .finally(() => {
  //     setLoading(false);
  //    })
  //  }, 200)


  // }, [])
  // const getyear = (st) => {
  //   console.log(st.slice(0, 4));
  //   return st.slice(0, 4);
  // }
  // console.log(movies.data.results[0].title);
  console.log(movies);
  // if (loading) return "loading...";
  // if (error) return "error..."
  return (
    <div className="App">
      <h1>hello welcome to movie listing</h1>
      {/* <label htmlFor="">filter movie by year </label>
      <input type="number" placeholder='filter by year' onChange={(e) => { setDate(e.target.value); setSm(false); }} />
      <button onClick={() => setSm(true)}>find</button> */}
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