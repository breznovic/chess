import React from 'react'
import AccordionTitle from './AccordionTitle'
import AccordionBody from './AccordionBody'


type PropsType = {
    title: string
    // collapsed: boolean
}

export function UnAccordion(props: PropsType) {

    let collapsed = false

    return (
        <div>
            <AccordionTitle title={props.title}/><button>Toggle</button>
            { !collapsed && <AccordionBody/> }
        </div>
    )
}