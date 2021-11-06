import React from 'react'
import classes from './App.module.css'
import {Accordion} from './components/Accordion/Accordion'
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className={classes.app}>
            <PageTitle title={'This is App Component'}/>
            <PageTitle title={'Users'}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users List'} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    )
}

type PageTitleProps = {
    title: string
}

function PageTitle(props: PageTitleProps) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App
