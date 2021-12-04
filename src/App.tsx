import React, {useState} from 'react'
import classes from './App.module.css'
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import UnOnOff from "./components/OnOff/UnOnOff";
import {Select} from "./components/Select/Select";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={classes.app}>
            <Select value={'Book'} onClick={value => alert('hey')} items={[{value: 'dog', title: 'beast'}]} />
            <UnOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <OnOff on={switchOn} onChange={(on) => {
                setSwitchOn(on)
            }}/>
            <Accordion title={'Tatatatattt'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={[{title:'cat', value: 'feline'}, {title:'dog', value: 'beast' }, {title:'bird', value: 'flying'}]}/>
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
