import React, { useState } from 'react'
import topIngredients from "../API/allProductsAPI"
import meatList from "../API/meatAPI"
import vegetableList from "../API/vegetableAPI"
import seasoningList from "../API/seasoningAPI"
import fruitList from "../API/fruitsAPI"
import miscList from "../API/miscAPI"

import { DataGrid } from '@material-ui/data-grid';



export default function FridgeContainer() {
    
    const [ingredients, setIngredients] = useState({ingredients:[]})

    const [formIngredients, setFormIngredients] = useState({ingredients:[]})


    return (
        <div>
            <h1>Your Fridge</h1>
            <form onSubmit= {(e) => {
                e.preventDefault()
                setFormIngredients ({...formIngredients, ingredients:ingredients.ingredients})
                console.log(formIngredients.ingredients)
            } }>
                {formIngredients && formIngredients.ingredients.map ((ingredient)=>{
                    return <p>{ingredient.name}</p>
                 })}
                
                 {/* {
                    topIngredients.map((item) => {
                   
                    return (
                    <div>
                            <input name={`${item.product}`} type="checkbox"/> 
                            <label htmlFor={`${item.product}`}>{item.product}</label>
                    </div>
                    )
                })
                } */}

                <h1> Meats</h1>
                {
                    meatList.map((item) => {
                   
                    return (
                    <div>
                            <input name={`${item.product}`} type="checkbox" 
                            onChange={(e) => ( setIngredients({ingredients:[...ingredients.ingredients,{name:e.target.name}]}))} 
                                 /> 
                            <label htmlFor={`${item.product}`}>{item.product}</label>
                    </div>
                    )
                })
                }
                <h1> Vegetables</h1>
                {
                    vegetableList.map((item) => {
                   
                    return (
                    <div>
                            <input name={`${item.product}`} type="checkbox"
                            onChange={(e) => ( setIngredients({ingredients:[...ingredients.ingredients,{name:e.target.name}]}))} /> 
                            <label htmlFor={`${item.product}`}>{item.product}</label>
                    </div>
                    )
                })
                }
                <h1> Seasoning</h1>
                {
                    seasoningList.map((item) => {
                   
                    return (
                    <div>
                            <input name={`${item.product}`} type="checkbox"
                           onChange={(e) => ( setIngredients({ingredients:[...ingredients.ingredients,{name:e.target.name}]}))} /> 
                            <label htmlFor={`${item.product}`}>{item.product}</label>
                    </div>
                    )
                })
                }
                <h1> Fruit</h1>
                {
                    fruitList.map((item) => {
                   
                    return (
                    <div>
                            <input name={`${item.product}`} type="checkbox"
                            onChange={(e) => ( setIngredients({ingredients:[...ingredients.ingredients,{name:e.target.name}]}))} /> 
                            <label htmlFor={`${item.product}`}>{item.product}</label>
                    </div>
                    )
                })
                }
            
                <h1> Miscellaneous</h1>
                {
                    miscList.map((item) => {
                   
                    return (
                    <div>
                            <input name={`${item.product}`} type="checkbox"
                            onChange={(e) => ( setIngredients({ingredients:[...ingredients.ingredients,{name:e.target.name}]}))} /> 
                            <label htmlFor={`${item.product}`}>{item.product}</label>
                    </div>
                    )
                })
                }
                
                <input type="submit"></input>
            </form>
            
        
        </div>
    )
}