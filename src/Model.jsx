import React from 'react'
import { useState, useEffect } from 'react';
import './model.css'
function Model(props) {
 console.log(props.model);
 const [minfo, setMinfo] = useState("");
 const [error, setError] = useState(true);
 const [loading, setLoading] = useState(true);
 // const [show, setShow] = useState(props.show);
 useEffect(() => {

  fetch(`https://movie-task.vercel.app/api/movie?movieId=${props.model}`)
   .then(response => {
    if (response.ok) {
     return response.json();
    }
    throw response;
   })
   .then(dat => {
    // console.log(minfo);
    setMinfo(dat)
   })
   .then(error => {
    console.error("error in fetching the data" + error);
    setError(error);
   })
   .finally(() => {
    setLoading(false);
   })
 }, [props.model])
 // console.log(minfo.data.overview);
 if (loading) return "loading...";
 if (error) return "error..."
 return (
  props.show &&
  (<div className='model'>
   <p>{minfo.data.model}</p>
   <p>overview: {minfo.data.overview}</p>
   <p>revenue:{minfo.data.revenue}</p>
   <p>runtime:{minfo.data.runtime} minutes</p>
   <p>rating:{minfo.data.vote_average} out of 10</p>
   <p>rating:{minfo.data.release_date}</p>
   <p><b>production_companies</b></p>
   {

    minfo.data.production_companies.map((company) => {
     return (
      <p>{company.name}</p>
     )
    })
   }
   <p><b>movie genre</b></p>
   {
    minfo.data.genres.map((genre) => {
     return (
      <p>{genre.name}</p>
     )
    })
   }
   <button className='btn' onClick={() => props.setShow(false)} >close</button>
   {/* <button className='btn' onClick={() => props.setShow((prev) => !prev)} >close</button> */}

  </div>)
 )
}

export default Model