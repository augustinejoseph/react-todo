// import React, { useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';


// const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
//   const updateTodo = (title, id, completed) => {
//     const newTodo = todos.map((todo) => {
//       return todo.id === id ? { title, id, completed } : todo;
//     });
//     setTodos(newTodo);
//     setEditTodo("");
//   };
//   useEffect(() => {
//     if (editTodo) {
//       setInput(editTodo.title);
//     } else {
//       setInput("");
//     }
//   }, [setInput, editTodo]);
//   const onInputChange = (event) => {
//     setInput(event.target.value);
//   };
//   const onFormSubmit = (event) => {
//     event.preventDefault()
//     if (!editTodo) {
//       setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
//       setInput("");
//     } else {
//       updateTodo(input, editTodo.id, editTodo.completed)
//     }
//   };
//   return (
//     <form onSubmit={onFormSubmit}>
//       <input type='text'
//         placeholder='Enter a Todo...'
//         className='task-input'
//         value={input}
//         required
//         onChange={onInputChange}
//       />
//       <button className='button-add' type='submit'>
//         {editTodo ? 'OK' : 'Add'}
//       </button>
//     </form>
//   )
// }

// export default Form


import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

  const updateTodo = (title, id, completed) => {
    const duplicateTodo = todos.find((todo) => todo.title === title && todo.id !== id);
    if (duplicateTodo) {
      alert("A todo with the same name already exists.");
    } else {
      const newTodo = todos.map((todo) => {
        return todo.id === id ? { title, id, completed } : todo;
      });
      setTodos(newTodo);
      setEditTodo("");
    }
  };
  

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      // Check if the input value already exists in the todos list
      const isDuplicate = todos.some((todo) => todo.title === input.trim());
      if (!isDuplicate) {
        setTodos([...todos, { id: uuidv4(), title: input.trim(), completed: false }]);
        setInput("");
      } else {
        alert("This todo already exists!");
      }
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='Enter a Todo...'
        className='task-input'
        value={input}
        required
        onChange={onInputChange}
      />
      <button className='button-add' type='submit'>
        {editTodo ? 'OK' : 'Add'}
      </button>
    </form>
  );
};

export default Form;
