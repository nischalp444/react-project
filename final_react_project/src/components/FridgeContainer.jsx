import React from 'react'
import topIngridients from "../API/allProductsAPI"

export default function FridgeContainer() {

    
    return (
        <div>
            <h1>Fridge</h1>
            <form>
                
                 {
                    topIngridients.map((item) => {
                   
                    return (
                    <div>
                            <input name={`${item.product}`} type="checkbox"/> 
                            <label htmlFor={`${item.product}`}>{item.product}</label>
                    </div>
                    )
                })
                }
            </form>
        
        </div>
    )
}
