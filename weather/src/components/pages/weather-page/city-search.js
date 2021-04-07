import React, { Component } from "react";
import { searchCity } from "../../services/services";
import SearchPanel from "./search-panel/Search-panel";
import queryString from "query-string";
import styles from "./CitySearch.module.css";

class CitySearch extends Component {
  state = {
    query: "",
  };


  render() {
   
    return (
      <>
        <SearchPanel onHandleSubmit={this.handleSubmit} />
    
      </>
    );
  }
}

export default CitySearch;
