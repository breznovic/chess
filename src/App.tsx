import React from 'react'
import classes from './App.module.css'
import {Accordion} from './components/Accordion/Accordion'
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UnAccordion} from "./components/Accordion/UnAccordion";

function App() {
    return (
        <div className={classes.app}>
            {/*<Accordion title={'Menu'} collapsed={true}/>*/}
            {/*<Accordion title={'Users List'} collapsed={false}/>*/}
            {/*<Rating value={0} />*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
            <OnOff />
            <OnOff />
            <OnOff />
            <UnAccordion title={'Here I am'} />
            <UnAccordion title={'Me too'} />
            <Rating value={1} />
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
