import React from 'react';
import './fontawesome'
import './stylesheets/App.scss';
import {NavBar} from "./components/NavBar";
import {SearchBar} from "./components/SearchBar";
import {AddPopup} from "./components/AddPopup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="App-logo">Trecipe</h1>
          {/*Below nav bar and search bar for demo purpose in this branch only. Will be removed before merging in*/}
          <NavBar links={[{text: 'About', url: ''},
              {text: 'My Trecipes', url: ''},
              {text: 'Account', url: ''}]}/>
          <SearchBar/>
          <AddPopup/>
      </header>
    </div>
  );
}

export default App;
