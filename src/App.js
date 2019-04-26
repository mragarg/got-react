// V1. Character List
// V2. Detail View
// V3. Search Bar

import React from 'react';
import gotLogo from './images/gotLogo.png';
// import './App.css';

import characters from './characters';
import CharacterList from './CharacterList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log(Object.values(characters));
    return (
      <div className="App text-center">
        <img src={gotLogo} className="App-logo w-50" alt="logo" />
        <h3>
          Character App
        </h3>
        <CharacterList characters={Object.values(characters)}/>
      </div>
    );
  }

}

export default App;
