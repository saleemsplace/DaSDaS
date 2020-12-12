
import React from "react";
import  './App.css';

function Tweet(props){
    return(
        <div className="tweet">
           <h3>{props.name}</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore debitis aliquid, numquam nulla impedit, ducimus iste eveniet quibusdam doloribus est alias deleniti quae reprehenderit dolor architecto et ad deserunt sequi?30</p> 
            <h3>{props.likes}</h3>
        </div>
    )
}

export default Tweet