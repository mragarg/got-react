import React from 'react'

function CharacterList(props) {
    return (
        <div>
            <ul>
                {
                    props.characters.map((character, i) => {
                        return (
                            <li key={i}>
                                {character.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default CharacterList
