import React from 'react';
import gotLogo from './images/gotLogo.png';
// import './App.css';

import  characters from './characters';
import CharacterList from './CharacterList';

class App extends React.Component {


  render() {
    return (
      <div className="App text-center">
        <img src={gotLogo} className="App-logo w-50" alt="logo" />
        <h3>
          Character App
        </h3>
        <CharacterList />
      </div>
    );
  }

}

export default App;
