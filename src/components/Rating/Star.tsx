import React from 'react'

type StarPropsType = {
    selected: boolean
}

function Star(props: any) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return (<span>star </span>)
    }

}

export default Star