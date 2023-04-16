import { useState } from 'react';

const RandomizeNumber = () => {
    const [num, setNum] = useState(0);

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setNum(randomNumberInRange(1, 1000000));
    };
    return (
        <div className="RandomizeNumber">
            <h1>Click the button to draw a number.</h1>
            <button onClick={handleClick}>Let's Play!</button>
            <h2>Your Number: {num}</h2>
            <h3>* Any number in the 1 to 1000 range wins!</h3>
        </div>
    );
}

export default RandomizeNumber;