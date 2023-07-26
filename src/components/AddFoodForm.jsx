import { Divider, Input, Button } from "antd";
import { useState } from "react";

function AddFoodForm({ foods, setFoods }) {

    const [newFood, setNewFood] = useState({
        name: "",
        calories: 0,
        image: "",
        servings: 0,
        id: random_code()
      })


    const handleTextChange = (e) => {
        setNewFood((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleNumberChange = (e) => {
        setNewFood((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
    }

    const handleSubmit = (e) => {
        console.log("submitting")
        e.preventDefault()

        console.log("New Food", newFood)

        setFoods([newFood, ...foods])

        setNewFood({
            name: "",
            calories: 0,
            image: "",
            servings: 0,
            id: random_code()
          })

    }

    function random_code () {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return String(n.slice(0, 20));
      };
      
    
  return (
    <form id="add-food">
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" value={newFood.name} type="text" onChange={handleTextChange} />

      <label>Image</label>
      <Input name="image" value={newFood.image} type="text" onChange={handleTextChange} />

      <label>Calories</label>
      <Input name="calories" value={newFood.calories} type="number" onChange={handleNumberChange} />

      <label>Servings</label>
      <Input name="servings" value={newFood.servings} type="number" onChange={handleNumberChange} />

      <Button onClick={handleSubmit} type="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;