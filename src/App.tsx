import React from 'react';
import FirstSlider from './sliders/firstSlider.tsx';
import SecondSlider from './sliders/secondSlider.tsx';
import './App.scss';
import slides from './data.json'

const App = () => {
  const sliderImg = slides.map((item) => item.img);

  return (
    <div className='appContainer'>
      <div>
        <h1>Hero Banner Slider</h1>
        <FirstSlider slides={sliderImg}/>
      </div>
      <div>
      <div>
        <h1>Second Slider</h1>
        <SecondSlider slides={slides}/>
      </div>
      </div>
    </div>
  );
};

export default App;
