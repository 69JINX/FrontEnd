import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

function App() {
  const [category, setcategory] = useState([]);
  const [selected_categories, setselected_categories] = useState([]);
  const [allproducts, setallproducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then((response) => {
        setcategory(response.data);
      })
  }, []);

  useEffect(() => {
    showproducts(selected_categories);
  }, []); // [] empty dependency so the useEffect don't execute infinity times but only one time when the component Mount

  useEffect(() => {                     // automatically calls whenever selected_categories is updated/changed
    showproducts(selected_categories); 
    console.log(selected_categories); 
  }, [selected_categories])

  function update_selected_categories(e) {

    let isChecked = e.target.checked;
    let arr = [];
    if (isChecked) {
      // selected_categories.push(e.target.id);
      // setselected_categories(prev => [...prev, e.target.id]);
      setselected_categories([...selected_categories, e.target.id]);
      // console.log(selected_categories);
    }

    if (!isChecked) {
      const index = selected_categories.indexOf(e.target.id);
      if (index > -1) { // only splice array when item is found
        // selected_categories.splice(index, 1); // 2nd parameter means remove one item only
        arr = selected_categories;
        arr.splice(index, 1);
        setselected_categories(prev=>[...prev,]); // UPDATER FUNCTION (prev is not a keyword, we could use anything we want) abc=>[...abc,]
      }
    }
    // arr = selected_categories;
    // setselected_categories(arr);
    //showproducts(selected_categories);
    
  }

  function showproducts(array) {

    setallproducts([]); // reseting the array to avoid duplicate items
    if (array.length <= 0) {
      axios.get('https://dummyjson.com/products?limit=0')
        .then((response) => {
          setallproducts(prev => [...prev, response.data.products]); // UPDATER FUNCTION
        });

    }
    if (array.length > 0) {
      array.map((v) => {
        let vv = v.toString().replace(/\s+/g, '-');  // replacing spaces with dash because categories are with spaces(Mens Shirts) but in api they are with dashes(Mens-Shirts)
        axios.get(`https://dummyjson.com/products/category/${vv}`)
          .then((response) => {
            setallproducts(prev => [...prev, response.data.products]); // setState(state => state + 1) this process in useState is called UPDATE FUNCTION. Here, instead of doing state + 1, we used a spread operator
            /*in the line above, we used a "UPDATER FUNCTION" instead of using setallproducts([...allproducts,response.data.products])
             because the final value of the state depends on the previous value of the state (adding new products in previous list array)
             and React will only update the DOM when the new state value is different from the previous state value.
             see this video for better explanation : https://youtu.be/skO0tmThWDc or search "UPDATER FUNCTION in useState" on internet
            */
          });
      })
    }
  }

  return (
    <>
      <ul className="category-list">
        {
          category.map((v) => {
            return (
              <li className='m-1'>
                <input id={v.name} type="checkbox" onChange={e => update_selected_categories(e)} />
                <label htmlFor={v.name}>{v.name}</label>
              </li>
            )
          })
        }
      </ul>

      <div className="products d-inline-flex flex-wrap gap-4 ">
        {
          allproducts[0] == undefined ? '' : (  //using Ternary operator
            selected_categories.length <= 0 ? (
              allproducts[0].map((v) => {
                return (
                  <Link className="text-decoration-none" to={`/ProductDetails/${v.id}`}>
                    <div className="card product" style={{ width: '18rem' }}>
                      <img className="card-img-top" src={v.thumbnail} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">{v.title}</h5>
                        <p className="card-text">$ {v.price}</p>
                      </div>
                    </div>
                  </Link>
                )
              })
            ) : (
              allproducts.map((v) => {
                return (
                  v.map((ele) => {
                    return (
                      <Link className="text-decoration-none" to={`/ProductDetails/${ele.id}`}>
                        <div className="card product" style={{ width: '18rem' }}>
                          <img className="card-img-top" src={ele.thumbnail} alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title">{ele.title}</h5>
                            <p className="card-text">$ {ele.price}</p>
                          </div>
                        </div>
                      </Link>
                    )
                  })
                )
              }
              )
            )
          )
        }
      </div>
    </>
  )
}

export default App
