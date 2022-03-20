import React, { useState } from "react"
import { ComponentPropsType } from "./types"
import Logo from "assets/images/common/sunsniffer-logo.png"
import Input from "components/common/custom-input"
import Button from "components/common/custom-button"
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "./style.scss"

const LandingPage: React.FC<ComponentPropsType> = () => {

    const [city, updateCity] = useState<string>('')
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate()
    const handleOnChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        updateCity(value)
        setValidated(false)
    }

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            setValidated(true)
        }
        navigate(`/${city}`)
    }

    return (
        <div className="landing-page-wrapper">
            <Form noValidate validated={validated} className="main-content" onSubmit={handleSubmit}>
                <img src={Logo} className="brand-logo" />
                <h3 className="text-center mt-4">Weather App</h3>
                <Input<string>
                    placeHolder="Enter the city name"
                    onChange={handleOnChange}
                    name="city-name"
                    value={city}
                    className="mt-2"
                    label='City Name'
                    required={true}
                />
                <Button label="Submit" type="submit" />
            </Form>
        </div>
    )
}

export default LandingPage