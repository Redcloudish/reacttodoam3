// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import TodoBanner from './TodoBanner';
import TodoCreator from './TodoCreator';
import TodoRow from './TodoRow';
import VisibilityControl from './VisibilityControl';

function App() {

  const [userName] = useState("Customer Couples");

  const [todoItems, setTodoItems] = useState([
    { action: "Buy Flowers", done: false },
    { action: "Go on Dinner date", done: false },
    { action: "Buy Romantic Candles", done: true },
    { action: "Book VIP Extra Package", done: false }
  ]);

  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    try {
      const data = localStorage.getItem("todos");
      if (data) {
        const parsedData = JSON.parse(data);
        if (Array.isArray(parsedData)) {
          setTodoItems(parsedData);
        }
      }
    } catch (error) {
      console.error("Failed to load todos:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems]);

  const createNewTodo = (task) => {
    if (!todoItems.find(item => item.action === task)) {
      const updatedTodos = [...todoItems, { action: task, done: false }];
      setTodoItems(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };

  const toggleTodo = (todo) => {
    const updatedTodos = todoItems.map(item =>
      item.action === todo.action ? { ...item, done: !item.done } : item
    );
    setTodoItems(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const todoTableRows = (doneValue) => todoItems
    .filter(item => item.done === doneValue)
    .map(item => <TodoRow key={item.action} item={item} toggle={toggleTodo} />);

  return (
    <div>
      <TodoBanner userName={userName} todoItems={todoItems} />

      <div className="m-3">
        <TodoCreator callback={createNewTodo} />
      </div>

      <div className="container-fluid">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th style={{ width: "75%" }}>Description</th>
              <th style={{ width: "25%" }}>Done</th>
            </tr>
          </thead>
          <tbody>
            {todoTableRows(false)}
          </tbody>
        </table>

        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="Completed Tasks"
            isChecked={showCompleted}
            callback={(checked) => setShowCompleted(checked)}
          />
        </div>

        {showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th style={{ width: "75%" }}>Description</th>
                <th style={{ width: "25%" }}>Done</th>
              </tr>
            </thead>
            <tbody>
              {todoTableRows(true)}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
