import React, {useState} from "react";
import "./styles.css";
import Card from './Card'
import {myFood} from './foodCollection'
import {normalizeStr} from './util'
import Header from "./Header";
import OpenHours from "./OpenHours";
import District from "./District";
import FoodType from "./FoodType";
import SearchBar from './SearchBar';

const Main = (props) => {

  const language = props.language;

  const [districts, updateDistricts] = useState([]);
  const [types, updateTypes] = useState([]);
  const [openHoursOption, updateOpenHours] = useState('Anytime');
  const [searchText,updateSearchText] = useState('');
  const [foodToDisplay] = useState(myFood);

  function handleTextOnChange(text){
    updateSearchText(text.toLowerCase())
  }

  function handleOpenHoursChange(value){
     updateOpenHours(value);
  }

  function handleOnDistrictSelect(target){
    let val = isNaN(target.value)? target.value: Number(target.value)
    let newDistricts;
    if((Number(target.getAttribute('pressed')))){
      newDistricts = districts.filter(e=> e!==val)
    }
    else{
      newDistricts = districts => districts.concat(val)
    }
    updateDistricts(newDistricts);
  }

  function handleOnFoodTypeSelect(target){
    let newFoodTypes;
    if((Number(target.getAttribute('pressed')))){
      newFoodTypes = types.filter(t=> t!==target.value)
    }
    else{
      newFoodTypes = types => types.concat(target.value)
    }
    updateTypes(newFoodTypes);
  }

  const districtIncluded = (district) =>{
    return districts.includes(district)?1:0;
  }

  const foodTypeIncluded = (foodType) =>{
    return types.includes(foodType)?1:0;
  }

  let filteredFood = [];
  for(const food of foodToDisplay){
    if(!normalizeStr(food.name).toLocaleLowerCase().includes(searchText)
    && !food.name.toLocaleLowerCase().includes(searchText))
      continue;
    if(districts.length!==0){
      if(!districts.includes(food.district))
        continue;
    }
    if(types.length!==0){
      let foodTypeLang = food.foodType;
      if(language === 'vie'){
        foodTypeLang = food.foodType === 'Dessert' ? 'Tráng miệng': 'Món lạ'
      }
      if(!types.includes(foodTypeLang))
        continue;
    }
    if(openHoursOption!=='Anytime'){
      let saigonHour = Number(new Date(0).toLocaleString('en-US', {hour: '2-digit',   hour12: false, timeZone: 'ETC/GMT+5' }))
      if(!(saigonHour >= food.openHours.start && saigonHour <= food.openHours.end))
        continue
    }
    filteredFood.push(food)
  }

  return (
    <div className="Main">

      {/* Title, Note */}
      <Header language={language}/>

      {/* Filterers*/}
      {/* District Filterer*/}
      <span className='Filter'>
        <span>
          <SearchBar text={searchText} handleTextOnChange={handleTextOnChange} language={language}/>
          <OpenHours value={openHoursOption} handleOpenHoursChange={handleOpenHoursChange} language={language}/>
        </span>
        <span> {language==='eng'? 'Select District(s)' : 'Chọn quận'} {' '}
          <District value={'Tân Phú'} pressed={districtIncluded('Tân Phú')} onSelect={handleOnDistrictSelect}/>
          <District value={'Phú Nhuận'} pressed={districtIncluded('Phú Nhuận')} onSelect={handleOnDistrictSelect}/>
          <District value={'Tân Bình'} pressed={districtIncluded('Tân Bình')} onSelect={handleOnDistrictSelect}/>
          <District value={1} pressed={districtIncluded(1)} onSelect={handleOnDistrictSelect}/>
          <District value={3} pressed={districtIncluded(3)} onSelect={handleOnDistrictSelect}/>
          <District value={4} pressed={districtIncluded(4)} onSelect={handleOnDistrictSelect}/>
          <District value={5} pressed={districtIncluded(5)} onSelect={handleOnDistrictSelect}/>
          <District value={6} pressed={districtIncluded(6)} onSelect={handleOnDistrictSelect}/>
          <District value={7} pressed={districtIncluded(7)} onSelect={handleOnDistrictSelect}/>
          <District value={8} pressed={districtIncluded(8)} onSelect={handleOnDistrictSelect}/>
          <District value={9} pressed={districtIncluded(9)} onSelect={handleOnDistrictSelect}/>
          <District value={10} pressed={districtIncluded(10)} onSelect={handleOnDistrictSelect}/>
          <District value={11} pressed={districtIncluded(11)} onSelect={handleOnDistrictSelect}/>
      </span>
      {/* Food Type Filterer*/}
      <span>
          <FoodType value={language==='eng'?'Dessert':'Tráng miệng'} pressed={foodTypeIncluded(language==='eng'?'Dessert':'Tráng miệng')} onSelect={handleOnFoodTypeSelect}/>
          <FoodType value={language==='eng'?'Exotic':'Món lạ'} pressed={foodTypeIncluded(language==='eng'?'Exotic':'Món lạ')} onSelect={handleOnFoodTypeSelect}/>
      </span>
    </span>
                          
    {/* Display food*/}
    <div className='FoodContainer'>
      {
        filteredFood.map(card=>{
        return(
          <Card key={card.id}
          id = {card.id}
          name={card.name}
          foodType={card.foodType}
          address={card.address}
          price={card.price}
          district={card.district}
          openHours={card.openHours}
          language={language}/>
        )
      })
    }
    </div>
  </div>
  );
}

export default Main;


