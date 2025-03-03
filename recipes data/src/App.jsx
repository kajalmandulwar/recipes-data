import React,{ useState } from "react";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Fetch from "./components/Fetch";
import Search from "./components/Search"
import Articles from "./components/Articles";
import "./style.css";



const App = () => {
  const[query,setQuery]=useState("")
  return (
    <>
      
      <Header />
      <Search setQuery={setQuery}/>
      <div className="container">
        <LeftMenu/>

        <div className="main">
        <Fetch query={query}/>
        </div>
        
       
        <Articles/>
       
      </div>
    </>
  );
};

export default App;