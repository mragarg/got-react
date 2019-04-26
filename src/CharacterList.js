import React from 'react'

function CharacterList(props) {
    return (
        <div className="list-group w-50 mx-auto">
        {/* THIS IS ANCHOR LIST FORMAT */}
            {
                props.characters.map((character, i) => {
                    return (
                        <a href="#" 
                            key={i} 
                            className="list-group-item list-group-action"
                            onClick={() => {
                                props.handleClick(character);
                            }}
                        >
                            {character.name}
                        </a>
                    );
                })
            }


        {/* THIS IS LIST FORMAT */}
            {/* <ul className="list-group w-50">
                {
                    props.characters.map((character, i) => {
                        return (
                            <li key={i} className="list-group-item">
                                {character.name}
                            </li>
                        )
                    })
                }
            </ul> */}
        </div>
    );
}

export default CharacterList
