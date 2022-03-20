import React from "react"

export type ComponentPropsType<T> = {
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    placeHolder: string,
    value: T,
    type?: string,
    name: string,
    label: string,
    className?: string,
    required?: boolean
}

export type InputType = string | number