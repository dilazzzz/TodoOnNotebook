import React, {useState} from 'react';
import Button from "@mui/material/Button";

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2 style={{color: 'white'}}>{count}</h2>
            <Button variant='contained' onClick={() => {
                let counter = 0
                let interval = setInterval(() => {
                    counter += 1

                    setCount(Math.floor(Math.random() * 100))

                    if (counter >= 20) {
                        clearInterval(interval)
                    }
                }, 100)
            }}>Узнать число</Button>
        </div>
    );
};

export default Counter;