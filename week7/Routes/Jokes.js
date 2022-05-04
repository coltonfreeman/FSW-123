import {useEffect, useState} from 'react';
import axios from 'axios';
import Joke from './Joke.js';
import { v4 as uuidv4 } from 'uuid';


function Jokes() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5')
            .then(res => setJokes(res.data.jokes))
            .then(err => console.log(err))
    }, []);

    const addJoke = (e) => {
        e.preventDefault();
        const inputBox = e.target.previousElementSibling;
        const newJoke = {joke: inputBox.value, id: uuidv4()};
        const tempJokes = [...jokes, newJoke];
        setJokes(tempJokes);
        inputBox.value = '';
        inputBox.placeholder = 'write your own joke';
    }

    const delJoke = (id) => {
        const tempJokes = [...jokes];
        const filteredJokes = tempJokes.filter(joke => joke.id !== id);
        setJokes(filteredJokes);
    }

    const listOfJokes = jokes.map((joke => {
        return <Joke key ={uuidv4()} joke={joke} delJoke={delJoke} />
    }))
    
    return (
        <div>
            <h1>Funny Programming Jokes</h1>
            <form id="jokesForm">
                <input placeholder="write your own joke" required></input><button onClick ={addJoke}>Add Joke!</button>
                {listOfJokes}
            </form>
        </div>
        
    )
}

export default Jokes;