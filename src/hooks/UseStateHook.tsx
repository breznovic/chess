import React, {useState} from "react";

export type CountType = {
    title: string
    date: number
}

export function computeInitialCount() {
    return Math.trunc(Math.random() * 20)
}

export const UseStateHook = () => {

    const [count, setCount] = useState<number>(computeInitialCount)
    const [state, setState] = useState<CountType>({
        title: 'Counter',
        date: Date.now()
    })

    const inc = () => setCount(count + 1)
    const dec = () => setCount(count - 1)

    function changeTitle() {
        setState(prev => {
            return {
                ...prev,
                title: 'New title'
            }
        })
    }

    return <div className='app'>
        <h1>Counter</h1>
        <div><h2>{count}</h2></div>
        <button className='btn btn-primary' onClick={inc}>Increment</button>
        <button className='btn btn-dark' onClick={dec}>Decrement</button>
        <button className='btn btn-secondary' onClick={changeTitle}>Change title</button>
        <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
}