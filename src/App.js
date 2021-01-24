import React, {useState, useEffect} from 'react';
import './App.css';

import Form from './components/form';
import ItemList from './components/list';
import data from './data/info.json';

function App() {
  const [items, setItems] = useState([]);
  const [editingMode, setEditingMode] = useState(false);
  const [editingItem, setEditingItem] = useState({});
  
  useEffect(() => {
    setItems(data);
    
  }, [])

  const formHandler = (info) => {
    if(editingMode){
      const newData = items.map(item => item.id === info.id ? info : item);
      setItems(newData);
      setEditingMode(false);
    } else {
      const infoWithId = {...info , id: Math.random()*1000}
      setItems([...items, infoWithId]);
    }
  }

  const onDelete = (item) => {
    const newData = items.filter( elm => elm.id !== item.id && elm);
    setItems(newData);
  }

  const onEdit = (item) => {
    setEditingMode(true);
    setEditingItem(item);
  }


  return (
    <div className="App">
      <div className='main-section'>
         <ItemList listItems={items} onEdit={onEdit} onDelete={onDelete} />
         <Form onSave={formHandler} editingMode={editingMode} editingItem={editingItem}/>
      </div>
      <div className='car-modal'></div>
    </div>
  );
}

export default App;
