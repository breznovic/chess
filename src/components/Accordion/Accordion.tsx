import React from 'react'
import AccordionTitle from './AccordionTitle'
import AccordionBody from './AccordionBody'


type PropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: PropsType) {

        return (
            <div>
                <AccordionTitle title={props.title}/>
                { !props.collapsed && <AccordionBody/> }
            </div>
        )
}



