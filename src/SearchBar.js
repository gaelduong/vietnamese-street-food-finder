import React from "react";

const SearchBar = (props) => {
  
  function handleTextOnChange(e){
    props.handleTextOnChange(e.target.value)
  }

  return <div><input type='text' placeholder={props.language==='eng'?'Search food by name...':'Tìm tên đồ ăn...'} value={props.text} onChange={handleTextOnChange} /></div>;
};

export default SearchBar;



