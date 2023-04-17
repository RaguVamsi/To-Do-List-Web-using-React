import React from 'react';

const ToDoitem = (props) => {
  return (
    <div onClick={() => props.deleteItem(props.id)}>
      <li className='list'>{props.text}</li>
    </div>
  );
};

export default ToDoitem;


