//import logo from './logo.svg';
import './App.css';
import React, {useState,} from "react";


function App() {

const [userName, setuserName] = useState("Adam");

  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
           {userName}'s To Do List
      </h4>
</div>
  );
}

export default App;
