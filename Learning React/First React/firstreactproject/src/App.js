import React,{useState} from 'react';
import Tweet from "./Tweet"





function App() {

const [isRed,setRed]=useState(false)

const makeRed=()=>{
  setRed(!isRed)
};

  return(
    <div className="app">
      <h1 className={isRed ? 'red' : ""}>Testing A Tweet</h1>
      <Tweet name='Saleem' likes='1002'/>
      <Tweet name ='Alex' likes='102'/>
      <Tweet name = 'Dom'likes='10'/>
      <Tweet name = 'Becca' likes='1001'/>
      <br></br>
      <button onClick={makeRed}>Color</button>
    </div>
    
  );
  }


  export default App;