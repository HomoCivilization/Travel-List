import React from 'react'

export default function Stats({ items }) {

    if (items.length === 0) return <p className="stats"><em>Start adding some items to your packing list 🚀 </em></p>

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = numPacked / numItems * 100;

    return (
        <footer className='stats'>
            {percentage === 100 ?
                <em>"You got everything! ready to go ✈ "</em> : <em>`💼you have {numItems} items on your list , and you already packed {numPacked}(`{Math.floor(percentage)}% of list is done`)`</em>}
        </footer>
    )
}
