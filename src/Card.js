import React from "react";
import "./styles.css";
import {normalizeStr} from './util.js'

const Card = (props) => {

  function handleClick(){
    const destination = preprocessAddress(props.address) + ',Ho Chi Minh, Vietnam'
    openInNewTab('https://google.com/maps/dir//'+destination,'_blank')
  }

  function preprocessAddress(address){
    return address.replace('/','%2F')
  }

  function openInNewTab(href) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href,
    }).click();
  }

  if(props.language==='eng'){
    return (
      <span className="Card">
        {/* <img src={"/assets/" + props.id + ".jpg"} alt='img not working'/> */}
        <span className='Image' style={{
          backgroundImage:"url(assets/" + props.id + ".jpg)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
          }}/>
  
        <span className='Details'>
          <span>
            <span><b>{normalizeStr(props.name)}</b></span>
            <span> {props.foodType}</span>
            <span>~ {Math.ceil(Number(props.price)*0.000043) + " USD"}</span>
            <span>{normalizeStr(props.address)}</span>
            <span>District: {props.district}</span>
            <span aria-label='clock' role='img'> 🕐 {props.openHours.start + ':00 - ' + props.openHours.end + ':00'}</span>
          </span>
          <span><button className='GetDirection' onClick={handleClick}> Get direction </button></span>
        </span>
      </span>
    );
  }
  return (
    <span className="Card">
      {/* <img src={"/assets/" + props.id + ".jpg"} alt='img not working'/> */}
      <span className='Image' style={{
        backgroundImage:"url(assets/" + props.id + ".jpg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}/>

      <span className='Details'>
        <span>
          <span><b>{props.name}</b></span>
          <span> {props.foodType==='Exotic'? 'Món lạ': props.foodType==='Seafood'? 'Hải sản':  'Tráng miệng'}</span>
          <span>~ {props.price + "VND"}</span>
          <span>{props.address}</span>
          <span>Quận: {props.district}</span>
          <span aria-label='clock' role='img'> 🕐 {props.openHours.start + ':00 - ' + props.openHours.end + ':00'}</span>
        </span>
        <span><button className='GetDirection' onClick={handleClick}> Dẫn đường </button></span>
      </span>
    </span>
  );
}

export default Card;