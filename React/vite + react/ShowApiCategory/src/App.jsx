import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './App.css'
function App() {
  const [category, setcategory] = useState([]);

  useEffect(() => {

    axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        setcategory(response.data);
      })
  });
  return (
    <ul>
      {
        
        category.map((ele) => {        // can't use forEach or any other loop cause they don't return any value
          return (                     // map returns(anything that is written inside return()) as many times as there are elements in an array 
            <li>{ele.name}</li>        // in short we could write : category.map(()=><li>{ele.name}</li>)
          )
        })

      }
      
    </ul>
  )
}

export default App
