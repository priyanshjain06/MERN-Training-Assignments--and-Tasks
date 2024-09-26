import React from 'react'    //rafce
import "./Props.css"
import vinita from  '../assets/vinita.jpg'
const Props = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>  
        {/* props  */}
        <img id ="user-img"src={props.image}  alt='vinita'></img>
         <p id='user-desc'>Hello I am Vinita</p> 
    </div>
  )
}
export default Props
