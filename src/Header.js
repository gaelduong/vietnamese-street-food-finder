import React from "react";

const Header = (props) => {
  
  if(props.language === 'eng'){
    return (
      <>
      <h1> Vietnamese Street Food in Saigon </h1>
        <p> Find rare & exotic street food in Saigon! </p>
        <span className='NoteContainer'>
          <p className='Note' style={{fontSize:"20px"}}>
            These are actual real food with real locations that I've personally collected. 
            Feel free to use this app as a guide if you ever travel to Vietnam!
          </p>
        </span>
      </>
    );
  }

  return (
    <>
    <h1> Đồ ăn vặt tại Sài Gòn </h1>
      <p> Tìm đồ ăn vặt độc, lạ và ngon ở Sài Gòn! </p>
      <span className='NoteContainer'>
        <p className='Note' style={{fontSize:"20px"}}>
          Đây là tổng hợp các món ăn vặt ở Sài gòn mà mình tự sưu tầm. Nếu bạn đang ở VN thì hãy sử dụng app này để tìm món ăn yêu thích của mình nhé!
        </p>
      </span>
    </>
  );
  

};

export default Header;


