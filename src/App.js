import React, { useContext } from "react";
import "./style.css";
import { MyContext } from './context';
import Stage1 from './components/stage_1';
import Stage2 from './components/stage_2';

export default function App() {

  const context = useContext(MyContext);
  
  return (
    <div className='wrapper'>
      <div className='center-wrapper'>
        <h1>Who pays the bill?</h1>
        {
        context.state.stage === 1 ? <Stage1 /> : <Stage2 />
        }
      </div>
    </div>
  );
}
