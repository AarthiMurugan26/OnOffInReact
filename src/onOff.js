import React from "react";
import './App.css';

 const Onoff = ()=>{
    const [color,setColor]=React.useState('white')      
   
    const setswitchFunction =(colour)=>{
    setColor(colour)
    };

    return (
        <div  className="container">
            <h2>CHANGE BACKGROUND COLOUR</h2> <br/><br/>
        <div className="box" style ={{backgroundColor: color, height:'100px', width:'100px'}}>
        </div>
        <div className="button">
        <button onClick={()=>setswitchFunction('green')}>ON</button>
        <button onClick={()=>setswitchFunction('red')}>OFF</button>
        </div>
        </div>
    )

    
}
export default Onoff