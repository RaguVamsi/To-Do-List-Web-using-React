import { useState } from 'react';
import './App.css';
import './components/inputArea.js';
import InputArea from './components/inputArea.js';
import ToDoitem from './components/ToDoitem';

function App() {
  const [items, setItems] = useState([]);

  const additems = (inputText) => {
    setItems((prevItems)=>{
      return [...prevItems,inputText]
    });
  };
  const deleteItem = (id)=> {
      setItems((prevItems) =>{
        return prevItems.filter((item,index)=>{
          return  index !== id;
        });
      });
  };
  console.log(items);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do-List</h1>
        <InputArea additems= {additems}/>
      </div>
      <div>
        <ul>
          {items.map((item,index)=>{
            return (
              <ToDoitem key={index} text={item} deleteItem={deleteItem} id={index}/>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
