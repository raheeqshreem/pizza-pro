import React, { useEffect, useState } from 'react'
import style from './pizza.module.css'

export default function Pizza(){

    const [Pizza,setPizza] = useState([]);
    
   const getPizza =  async()=>{
        const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        const data = await response.json();
        setPizza(data.recipes);
   }
    
useEffect( ()=>{
    getPizza();

},[]);

    return(
<div className='container'>
    <div className='row g-4 text-center'>
        {Pizza.map(product=>
<div className='col-lg-3'>
    <div className={`${style.design}`}>
    <div className='card'>
        <h2 className={`${style.fontsize}`}>{product.title.split(' ').slice(0,3).join(' ')}</h2>
<img src={product.image_url}/>

      </div>  
    </div>
</div>

    )}
    </div>
    </div>
    )
}