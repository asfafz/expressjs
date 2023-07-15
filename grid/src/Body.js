import React, { useEffect, useState } from "react";
import axios from 'axios'

function Body() {

    const [mealdata, setmealdata] = useState([])

    useEffect(() => {

        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res => {
            console.log(res.data.meals)
           setmealdata(res.data.meals)
        }).catch(err => { console.log(err) })

    }, [])



    const meal_data = mealdata.map((obj)=>{
        return(
        <div className="col-md-4">
                        <div><img id="mealimg" className="border border-primary rounded" src={obj.strMealThumb} width='300px' height='300px' /><br/>{obj.strMeal}</div>
        </div>)
    })

console.log(mealdata)

    return (

<div>
    <div className="row">
       {meal_data}</div>
        </div>
    );
}

export default Body;


