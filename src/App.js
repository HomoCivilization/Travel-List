import { useState } from 'react';

import Form from './components/form';
import Stats from './components/stats';
import PackingList from './components/packingList';
import Logo from './components/logo';

function App() {
  const [items, setItems] = useState([]);


  function handleAddItem(item) {
    setItems((items) => [...items, item])
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }
  function handleCheckBox(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function handleclearList() {
    const confirmed = window.confirm('are you sure you want to delete all items?')
    if (confirmed) setItems([])
  }



  return (
    <div className='app'>
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDelete} onHandleChange={handleCheckBox} onClearlist={handleclearList} />
      <Stats items={items} />

    </div>

  )
}

export default App;
