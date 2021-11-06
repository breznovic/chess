import React from 'react'

type PropsType = {
    title: string
}

function AccordionTitle(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

export default AccordionTitle