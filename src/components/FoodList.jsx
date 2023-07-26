import { Row, Divider } from "antd";
import { useState } from "react";
import foodData from '../foods.json'
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {

    const [foods, setFoods] = useState(foodData)

    const [searchTerm, setSearchTerm] = useState('')


    const deleteFood = (id) => {

        let filtered = [...foods].filter((food) => food.id !== id)

        setFoods(filtered)
    }

    let filtered = searchTerm ? foods.filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase())) : foods


  return (
    <div className="App">
    <h1>LAB | React IronNutrition</h1>
      
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <AddFoodForm foods={foods} setFoods={setFoods} />

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
            {
                filtered.map((food) => {
                    return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
                })
            }
      </Row>
    </div>
  );
}

export default FoodList;