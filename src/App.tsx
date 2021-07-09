import './App.css';
import React from "react";
import ShoppingList from './Components/ShoppingList/ShoppingList'
import data from './data';

function App() {
    const shoppingList = data;

    return (
      <div className="App">
          <ShoppingList items={shoppingList}/>
      </div>
  );
}

export default App;
