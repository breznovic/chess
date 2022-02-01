import React from 'react'
import {Button} from "./Button";

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Variants',
            defaultValue: 'primary',
            options: ['primary', 'square', 'link'],
            control: {
                type: 'radio'
            }
        }
    }
}

const Template = (arg: any) => <Button {...arg}/>

export const Default = () => Template.bind({})
Default.args = {
    children: 'Press me',
}

export const Large = Template.bind({})
Large.args = {
    children: 'Press me',
    size: Large
}