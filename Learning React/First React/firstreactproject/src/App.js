import React from 'react';
import Tweet from "./Tweet"





function App() {
  return(
    <div className="app">
      <h1>Testing A Tweet</h1>
      <Tweet name='Saleem' likes='1002'/>
      <Tweet name ='Alex' likes='102'/>
      <Tweet name = 'Dom'likes='10'/>
      <Tweet name = 'Becca' likes='1001'/>
    </div>
  );
  }


  export default App;