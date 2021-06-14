import React, { useState } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "../Components/Home";
import Stuff from "../Components/Stuff";
import Contact from "../Components/Contact";
import SearchBar from "../Components/searchbar";
import "../index.css";
import CardData from "../Components/Card"

import { useSelector } from 'react-redux'



const Main = () => {

  const [data, setData] = useState({})

  return (
    <HashRouter>
      { Object.keys(data).length > 1 ?
        <div>
          <SearchBar getData={setData} />
          <CardData data={data} />
        </div>
        : Object.keys(data).length > 0 && data.error ?
          <div>
            <SearchBar getData={setData} />
            <p style={{ color: 'grey' }}>Invalid ticker symbol</p>
          </div>
          :
          <div>
            <SearchBar getData={setData} />
            <p style={{ color: 'grey' }}>Search stock by ticker symbol</p>
          </div>
      }
    </HashRouter>
  );
}

export default Main