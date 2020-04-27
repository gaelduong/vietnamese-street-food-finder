import React from "react";

const About = (props) => {
  
  if(props.language === 'eng'){
    return (
      <div className="About" style={{padding:"0 16px"}}>
        <h2>Simplify the process!</h2>
        <p> This app will help you simplify the process of finding delicious exotic food in Saigon within a few clicks. </p>
        <p> You can quickly find appropriate food based the area(s), opening hours and the type(s) of food. </p>
        <p> <b> The price of food will also be automatically converted to USD when switching the language to English, in case you're not familiar with the Viet currency (VND). </b> </p>
        <p> Then once you've decided what and where to eat, the app will conveniently direct you to Google Maps's "Get direction" page with a pre-set destination.</p>

      </div>
    );
  }

  return(
    <div className="About" style={{padding:"0 16px"}}>
        <h2>Đơn giản hóa quá trình tìm đồ ăn!</h2>
        <p> Ứng dụng này sẽ giúp quá trình tìm đồ ăn trở nên đơn giản và nhanh hơn chỉ với một vài cú nhấp chuột.</p>
        <p> Bạn có thể nhanh chóng tìm các món ăn phù hợp dựa trên địa điểm và thời gian hoạt động của các quán.</p>
        <p> <b> Giá của các món ăn sẽ được chuyển sang USD trong trường hợp bạn là người nước ngoài và bạn không quen đổi tiền Việt. </b> </p>
        <p> Sau khi chọn được món yêu thích, app sẽ link bạn tới trang Dẫn Đường của Google maps và set sẵn cho bạn địa điểm đến.</p>

      </div>
  )
  
};

export default About;