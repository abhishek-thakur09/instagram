import React, { useState } from "react";
import "./Middleside.css";
import story  from "../stroy.json"
import Post from "./post/post";




const Middleside = () => {
  const stories= story.story
  
    
  return(
    <div className="middleHomeSide">
      <div className="storyBlock">
        {
          stories?.map((item,index)=>{
            return(
              <div className="storyParticular">
                <div className="imageDiv">
                  <img className="statusImg" src={item.img}></img>
                </div>
                <div className="profileName">{item.name}</div>
                </div>
            )
          })
        }



      </div>
      <div className="postSection">

        <Post/>
      



       
      </div>

    </div>
  )
};

export default Middleside;
