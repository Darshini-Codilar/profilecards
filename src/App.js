import './App.css';
import { useState } from 'react';
import Page1 from './page1';
import Page2 from './page2';


function App() {
  const [state,setstate]=useState(1);
  return (
    <div className="mainapp">
      <Page1 state={state}/>
      <Page2 setstate={setstate} state={state}/>
      
      </div>
  );
}

export default App;

