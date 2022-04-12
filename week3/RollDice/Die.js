function Die(props) {

    return (

     <>
            <div className="dies">

                    <div className="die">
                        <h1>{props.die1}</h1>
                    </div>

                    <div className="die">
                        <h1>{props.die2}</h1>
                    </div>

            </div>

            <div className="btn">

                <button onClick = {props.rollDice} >Roll Dice</button>

            </div>
       </>
    );
}

export default Die;