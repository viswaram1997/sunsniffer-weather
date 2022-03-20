import React from "react"
import { ComponentPropsType, InputType } from "./types"
import { Form } from "react-bootstrap"

const CustomInput = <T extends InputType>({ type = 'text', name, onChange, value, placeHolder, label = '',className='',required=false }: ComponentPropsType<T>) => {
    return (
        <Form.Group className={`mb-3 ${className}`}>
            <Form.Label>{label}</Form.Label>
            <Form.Control required={required} type={type} name={name} onChange={onChange} value={value} placeholder={placeHolder} />
            <Form.Control.Feedback type="invalid">Please enter the {name.replace('-',' ')}</Form.Control.Feedback>
        </Form.Group>
    )
}

export default CustomInput