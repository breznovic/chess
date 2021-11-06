import React from 'react'
import AccordionTitle from './AccordionTitle'
import AccordionBody from './AccordionBody'


type PropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: PropsType) {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
    } else

    { return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        )
    }
}

