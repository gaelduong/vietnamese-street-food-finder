import React from "react";

const OpenHours = (props) => {
  
  function handleChange(e){
    props.handleOpenHoursChange(e.target.value)
  }

  return (
    <div>
      <label style={{fontSize:'15px'}}> {props.language==='eng'?'Opening hours ':'Giờ mở cửa '}</label>
      <select className='select-css' value={props.value} onChange={handleChange}>
        <option value="openingNow">{props.language==='eng'?'Opening now':'Đang mở cửa'}</option>
        <option value="Anytime">{props.language==='eng'?'Anytime':'Mọi thời điểm'}</option>

      </select>
    </div>
  );
};

export default OpenHours;



