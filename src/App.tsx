import React, {useState} from 'react'
import classes from './App.module.css'
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import UnOnOff from "./components/OnOff/UnOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={classes.app}>
            <UnOnOff onChange={setSwitchOn} /> {switchOn.toString()}
            <OnOff on={switchOn} onChange={(on) => { setSwitchOn(on) }} />
            <Accordion title={'Tatatata'} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)} } />
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
