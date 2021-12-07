import { useState } from 'react';
import Profile from './profile';
import Pagination from './pagination';


function App() {
  const [state,setstate]=useState(1);
  return (
    <div className="mainapp">
      <Profile state={state}/>
      <Pagination setstate={setstate} state={state}/>
      
      </div>
  );
}

export default App;

