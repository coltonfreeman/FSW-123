function Joke({joke, delJoke}) {
    
    return (
        
        <>
            {
                (joke.joke) ? 
                <div className ="joke-div">
                    <li>{joke.joke}<button onClick ={() => delJoke(joke.id)}>X</button></li>
                </div>:
                <div className ="joke-div">
                    <li>{`${joke.setup} ${joke.delivery}`}<button onClick ={() => delJoke(joke.id)}>X</button></li>
                </div>
            }
        </>
    )
}

export default Joke;