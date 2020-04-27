import React,{useState} from "react";
import Main from "./Main"
import About from "./About";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { NavLink } from 'react-router-dom';

const App = () => {
  const [language, updateLanguage] = useState('eng');

  function handleLanguageChange(e){
    updateLanguage(e.target.value);
  }
  
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <ul className="topnav">
          <li><NavLink exact={true} className='Link' to='/'>{language==='eng'?'Find food!':'Tìm món ăn!'}</NavLink></li>
          <li><NavLink className='Link' to='/about'>{language==='eng'?'About':'Thông tin'}</NavLink></li>
        </ul>
        {/* Language */}
        <div className='Lang'>
          <input type="radio" id="eng" name="gender" value="eng" onChange={handleLanguageChange} checked={language==='eng'?true:false}/>
          <label htmlFor="eng">English {' '} </label>
          <input type="radio" id="vie" name="gender" value="vie" onChange={handleLanguageChange} checked={language==='vie'?true:false}/>
          <label htmlFor="vie">Vietnamese</label>
        </div>
        <Route exact path="/" render={(props) => <Main {...props} language={language} />} />
        <Route path="/about" render={(props) => <About {...props} language={language} />} />
      </div>
    </Router>

  );
};

export default App;