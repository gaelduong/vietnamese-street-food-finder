import React from "react";

const FoodType = (props) => {
  
  function handleClick(e){
    props.onSelect(e.target)
  }

  return (
    <button className='FoodType' style={{backgroundColor:props.pressed?'rgb(136, 202, 127)':'rgb(55, 53, 156)'}}
            onClick={handleClick} value={props.value} pressed={props.pressed}> {props.value} 
    </button>

  );
};

export default FoodType;



