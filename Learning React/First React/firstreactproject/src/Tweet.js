
import React from "react";
import  './App.css';

function Tweet({name,likes}){
    return(
        <div className="tweet">
           <h3>{name}</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore debitis aliquid, numquam nulla impedit, ducimus iste eveniet quibusdam doloribus est alias deleniti quae reprehenderit dolor architecto et ad deserunt sequi?30</p> 
            <h3>Likes: {likes}</h3>
        </div>
    )
}

export default Tweet