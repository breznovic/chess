import React, {useState} from 'react'
import AccordionTitle from './AccordionTitle'
import AccordionBody from './AccordionBody'


type PropsType = {
    title: string
    // collapsed: boolean
}

export function UnAccordion(props: PropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title}/><button onClick={() => { setCollapsed(!collapsed) }}>Toggle</button>
            { collapsed && <AccordionBody/> }
        </div>
    )
}