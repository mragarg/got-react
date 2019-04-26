import React from 'react';

// name, aliases, titles, born
function CharacterDetail(props) {
    console.log(props.characterObject.titles);
    return (
        <div>
            <p>Name: {props.characterObject.name}</p>
            <p>Aliases: {props.characterObject.aliases}</p>
            <p>Titles: {props.characterObject.titles}</p>
            <p>Born: {props.characterObject.born}</p>
        </div>
    );
}

export default CharacterDetail;