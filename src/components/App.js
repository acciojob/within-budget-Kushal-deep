
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const items = [
  { name: "Apple", price: 20 },
  { name: "Banana", price: 10 },
  { name: "Neutella", price: 30 },
  { name: "Razor", price: 5 },
  { name: "CornFlakes", price: 15 },
  { name: "Sound Bar", price: 50 },
  { name: "iPhone", price: 80 }
];

const [budget,setBudget]=useState("")
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Enter your budget to check available items</h1>
        <input type="number" value={budget} onChange={(e)=>setBudget(e.target.value)}></input>

        

        <table>
          <thead>Items you can buy are in Green color</thead>

        {
          
          items.map((thing,index) => {
            const affordable = thing.price <=Number(budget)
            return(
              <tbody>
                <tr key={index} >
            <td>{thing.name}</td>
            <td style={{ color: affordable ? 'green' : 'red' }}>{thing.price}</td>
            </tr>
            </tbody>
            )
          
})
          
        }

        </table>

    </div>
  )
}

export default App
