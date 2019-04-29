// V1. Character List
// V2. Detail View
// V3. Search Bar

import React from 'react';
import gotLogo from './images/gotLogo.png';
// import './App.css';

import characters from './characters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      character: ''
    }
  }

  render() {
    // console.log(Object.values(characters));
    return (
      <div className="text-center">
        <img src={gotLogo} className="App-logo w-50" alt="logo" />

        <h3 className="pb-5">
          Character App
        </h3>

        <div className="row">
          <div className="col-4">
            <CharacterList characters={Object.values(characters)} handleClick={this._setCharacterState}/>
          </div>
          <div className="col-8 text-left">
            {
              this.state.character ? <CharacterDetail characterObject={this.state.character}/> : null
            }
          </div>
        </div>

      </div>
    );
  }

  _setCharacterState = (character) => {
    console.log(`You picked ${character.name}!`)
    console.log(`You picked ${character}!`)
    this.setState({
      character
    });
  };

}

export default App;
