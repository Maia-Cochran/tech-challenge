import { useState} from 'react';
import LossMessage from '../LossMessage/LossMessage';


const RandomizeNumber = () => {
    const [num, setNum] = useState(0);
    const [hasLost, setHasLost] = useState(false);
    const max = 100000;
    const randomNumber = Math.floor(Math.random() * max);
    
    const handleClick = () => {
        setNum(randomNumber);
        if (randomNumber > 1000) {
            setHasLost(true)
        } 
    };

    return (
        <div className="RandomizeNumber">
            <h1>Click the button to draw a number.</h1>
            <button onClick={handleClick}>Let's Play!</button>
            <h2>Your Number: {num}</h2>
            <h3>* Any number in the 1 to 1000 range wins!</h3>
            {hasLost && <LossMessage />}
        </div>
    );
}

export default RandomizeNumber;