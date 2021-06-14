import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StockData } from '../Store/reducer'
import axios from 'axios'

const SearchBar = (props) => {

  // const { search } = props;
  const [keyword, setKeyword] = useState("")
  // console.log(props,"PROPS")

  const dispatch = useDispatch()

  const search = async (ev) => {
    ev.preventDefault();
    try {
      const { data } = await axios.get(`https://sandbox.iexapis.com/stable/stock/${keyword}/quote?token=Tsk_678b4f8a0c3b4032b11c7568fb24dc17`, {
        method: "GET"
      })
      console.log(data, "RES")
      dispatch(StockData(data))
      props.getData(data)
    } catch (err) {
      if(err.message == "Request failed with status code 404") {
        props.getData({error: "Request failed with status code 404"})
      }
    }
  }

  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        style={{ height: 40, width: 150, borderRadius: 30, borderColor: 'lightgray' }}
        type="text"
        id="header-search"
        placeholder="Stock Ticker"
        name="s"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={search} style={{ height: 40, width: 100, borderRadius: 40, backgroundColor: 'black', color: 'white', marginLeft: 10 }} type="submit">SEARCH</button>
    </form>
  )
};

export default SearchBar;