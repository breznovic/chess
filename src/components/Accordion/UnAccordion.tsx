import React, {useState} from 'react'
import AccordionBody from './AccordionBody'
import {AccordionTitle} from "./Accordion";

type UnAccType = {
    title: string
    onChange: () => void
}

export function UnAccordion(props: UnAccType) {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} onChange={() => {setCollapsed(!collapsed)}} />
            { collapsed && <AccordionBody/> }
        </div>
    )
}

