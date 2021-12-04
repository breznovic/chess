import React from 'react'
import {ItemType} from "./Accordion";

type PropsType = {
    items: ItemType[]
}

function AccordionBody(props: PropsType) {
    return (
        <div>
            <ul>
                {
                props.items.map((i, index) => <li key={index}>{i.title}</li>)
                }
                <button>Click Me!</button>
            </ul>
        </div>
    )
}

export default AccordionBody