import { useState } from "react";

export default function List(){
    const[ items, setItems] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleAddItem = ()=>{
        setItems([...items, inputValue]);
        setInputValue("")
    }
    return(
        <div>
            <h1>Lista:</h1>
            <ul>
                {items.map((item, index)=>
                <li key={index}>{item}</li>
                )}
            </ul>
            <div>
                <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
                <button onClick={handleAddItem}>Agregar</button>
            </div>
        </div>
    )
}