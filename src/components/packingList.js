import React, { useState } from 'react'


// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function PackingList({ items, onDeleteItem, onHandleChange, onClearlist }) {
    const [sortBy, setSortBy] = useState('input')
    let sortedItems;


    if (sortBy === "input")
        sortedItems = items;

    if (sortBy === "description")
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))

    if (sortBy === "packed")
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))


    return (
        <div className='list' >
            <ul > {sortedItems.map((item) => (<Item item={item} key={item.id} onDeleteItem={onDeleteItem} onHandleChange={onHandleChange} />))}
            </ul >
            <div className='action'>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value='input'>Sort By the input order</option>
                    <option value='description'>Sort By the description</option>
                    <option value='packed'>Sort By the packed status</option>
                </select>
                <button onClick={onClearlist}>Clear List</button>
            </div>
        </div>
    )
}


function Item({ item, onDeleteItem, onHandleChange }) {
    return <li>
        <input type='checkbox' value={item.packed} onChange={() => { onHandleChange(item.id) }} />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
            {item.quantity} {item.description}
        </span><button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li >

}
