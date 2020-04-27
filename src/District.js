import React from "react";

const District = (props) => {
  
  function handleClick(e){
    props.onSelect(e.target)
  }

  return (
    <button className='District' style={{backgroundColor:props.pressed?'rgb(136, 202, 127)':'#6f7ac7'}}
            onClick={handleClick} value={props.value} pressed={props.pressed}> {props.value} 
    </button>

  );
};

export default District;



