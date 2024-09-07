import React from 'react';
import Header from './header/Header';
import Slideshow from './slideshow/Slideshow';
import About from './about/About';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <div className='pt-5'>
        <About/>
      </div>
      <div className='pt-5'>
        <Slideshow/>
      </div>
    </div>
  );
}

export default App;
