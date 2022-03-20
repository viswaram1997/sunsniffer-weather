import React from "react"
import { ComponentPropsType } from "./types"
import { Button } from "react-bootstrap"

const CustomButton: React.FC<ComponentPropsType> = ({ type = 'button', variant = 'primary', label,onClick=()=>{ return '' } }) => {
    return <Button type={type} onClick={onClick} variant={variant} data-testid="custom-button">{label}</Button>
}

export default CustomButton