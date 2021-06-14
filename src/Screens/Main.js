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
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{ justifyContent: 'center' }}>
            <HashRouter>
              {Object.keys(data).length > 1 ?
                <div>
                  <SearchBar getData={setData} />
                  <CardData data={data} />
                </div>
                : Object.keys(data).length > 0 && data.error ?
                  <div className="row">
                    <div className="col" style={{justifyContent: ''}}>
                      <SearchBar getData={setData} />
                      <p className="mr-5" style={{ color: 'grey', marginTop: '50px', textAlign: 'center' }}>Invalid ticker symbol</p>
                    </div>
                  </div>
                  :
                  <div className="row">
                    <div className="col" style={{}}>
                      <SearchBar getData={setData} />
                      <p className="mr-5" style={{ color: 'grey', marginTop: '50px', textAlign: 'center', }}>Search stock by ticker symbol</p>
                    </div>
                  </div>
              }
            </HashRouter>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main