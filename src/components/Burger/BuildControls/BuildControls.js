import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/buildcontrol';

const controls = [
    {label:'Salad',type:'salad'},    
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'},
    {label:'Bacon',type:'bacon'},
]

const BuildControls = (props)=>(
    <div className = {classes.BuildControls}>
        <p 
           className = {classes.PriceBox}>
            Burger Price:
        <strong>{props.price.toFixed(2)}</strong>
       </p>

    {controls.map((cntrl)=>(
             
            <BuildControl key={cntrl.label} 
                          label = {cntrl.label} 
                          add = {()=>props.add(cntrl.type)} 
                          sub = {()=>props.sub(cntrl.type)}
                          disabled = {props.disabled[cntrl.type]}/>
         ))}
        <button disabled = {!props.purchasable}
                className = {classes.OrderButton}
                onClick = {props.purchase} >Checkout</button>
 </div>
    )
    
    

export default BuildControls;