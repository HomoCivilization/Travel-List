import { useState } from 'react'





export default function Form({ handleAddItem }) {
    const [description, setdecription] = useState(" ")
    const [quantity, setQuantity] = useState(0)

    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return; //jb koi description na ho 

        const newItem = { description, quantity, packed: false, id: Date.now() }

        handleAddItem(newItem)

        setdecription("");
        setQuantity(1)
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3>What do you need for the😍 trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => <option value={num} key={num}>{num}</option>)}

            </select>
            <input type='text' placeholder='Item...' value={description} onChange={(e) => setdecription(e.target.value)} />
            <button>Add</button>
        </form >
    )
}
