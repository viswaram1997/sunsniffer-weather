import React, { useEffect, useMemo } from "react"
import { ComponentPropsType, useParamsType, weatherDetailsResponse, cookedWeatherDetails } from "./types"
import useAPI from "hooks/useAPI"
import { useParams } from "react-router-dom"
import { getWeatherDetails } from "./config"
import { getFinalWeatherDetails,findBestDayToSell } from "./helper"
import { Row, Col } from "react-bootstrap"
import WeatherCard from "components/weather-details/weather-card"
import Loader from "components/common/loader/loader"
import "./style.scss"
const WeatherDetails: React.FC<ComponentPropsType> = () => {

    const { city } = useParams<useParamsType>()
    const { makeAPICall, loading, error, data } = useAPI<weatherDetailsResponse>()

    useEffect(() => {
        if (city) {
            getWeatherDetails.addCity = city
            makeAPICall(getWeatherDetails)
        }
    }, [city])

    const finalWeatherDetails = useMemo(() => {
        if (!error && data) {
            return getFinalWeatherDetails(data)
        }
        return []
    }, [loading, error, data])

    const bestDayToSell = useMemo(() => {
        if (finalWeatherDetails.length) {
            return findBestDayToSell(finalWeatherDetails)
        }
        return ''
    }, [finalWeatherDetails])


    return (
        <div className="weather-details-wrapper">
            <h2>Weather Forecast for Next 5days</h2>
            {error ? <div className="error-message">{data?.message || 'Something Went wrong'}</div> :
            <div className="weather-cards-wrapper">
                <Row className="weather-header">
                    <Col xs="3" md="4">Day</Col>
                    <Col xs="3" md="2">Humidity</Col>
                    <Col xs="3" md="3">Weather</Col>
                    <Col xs="3" md="3">Temprature</Col>
                </Row>
                {loading && <Loader />}
                {!!finalWeatherDetails.length && finalWeatherDetails.map((weatherDetails: cookedWeatherDetails, index: number) => {
                    return <WeatherCard bestDayToSell={bestDayToSell} key={index} cardDetails={weatherDetails} />
                })}
            </div>}
        </div>
    )
}

export default WeatherDetails