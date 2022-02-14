import React, {useEffect, useRef, useState} from 'react'
import './App.css'
import {UseStateHook} from "./hooks/UseStateHook";

export const App = () => {

    const [type, setType] = useState('users')
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)

    useEffect(() => {
        renderCount.current++
    })

    const users = () => setType('users')
    const tasks = () => setType('tasks')
    const posts = () => setType('posts')

    return <div className='app'>
        <UseStateHook/>
        <div>
            <h2>
                Resource: {type}
            </h2>
            <button className='btn btn-primary' onClick={users}>Users</button>
            <button className='btn btn-dark' onClick={tasks}>Tasks</button>
            <button className='btn btn-secondary' onClick={posts}>Posts</button>
        </div>
        <div><h2>
            Render count: {renderCount.current}
        </h2>
            <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value}/>
        </div>
    </div>
}
