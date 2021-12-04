import React from 'react'

type ItemType = {
    title: string
    value: any
}

type PropsType = {
    value: any
    onClick: (value: any) => void
    items: ItemType[]
}

export function Select(props: PropsType) {
    return <div>
        <div>{props.items.map(i => <div>{i.title}</div>)}</div>
    </div>
}

