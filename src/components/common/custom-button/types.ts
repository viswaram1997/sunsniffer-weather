import React from "react"

export type ComponentPropsType = {
    onClick?: () => void,
    label: string,
    type?: 'submit' | 'reset' | 'button',
    variant?: string
}
