import React, { useState, useMemo } from "react";

function calculatedFunction(value) {
    for (let i = 0; i < 100000000; i++ ){};
    return value * value;
}

const MemoComponent = () => {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(0);

    const calculated = useMemo(
        () => calculatedFunction(count1), [count1]);

    return (
        <div>
            <h2>MemoComponent</h2>
            <p>Count 1: {count1}, {calculated}</p>
            <button onClick={() => setCount1(count1 + 1)}>Press button</button>
            <p>Count 2: {count2} </p>
            <button onClick={() => setCount2(count2 + 2)}>Press button</button>
        </div>
    )
}

export default MemoComponent;