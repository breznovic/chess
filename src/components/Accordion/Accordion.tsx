import React from 'react'
import AccordionBody from './AccordionBody'

type PropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

export type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

export function Accordion(props: PropsType) {

    return (
        <div>
            <AccordionTitle title={props.title}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}




