import React, { useState } from "react"

export const CounterFunction = () => {
    const [value, setValue] = useState(0);
    const increment = () => {
        setValue((prev) => prev + 1);
    }

    const decrement = () => {
        setValue((prev) => prev - 1);
    }

    return (
        <section>
            <div className="counter">
                <h3 className='value'>{value}</h3>
                <button className='btn' onClick={increment}>+</button>
                <button className='btn' onClick={decrement}>-</button>
            </div>
        </section>
    )
}