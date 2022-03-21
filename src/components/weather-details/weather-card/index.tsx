import React from "react"
import { ComponentPropsType } from "./types"
import { Card,Row,Col } from "react-bootstrap"
import moment from 'moment'
import "./style.scss"
const WeatherCard: React.FC<ComponentPropsType> = ({ cardDetails,bestDayToSell }) => {
    const { date,details } = cardDetails
    const { main,weather } = details || {}

    const getFormatDate = (date:string) =>{
        return moment().isSame(date,'day') ? 'Today' : moment(date).format('ddd')
    }
    return (
        <Card body className="card-root-wrapper" data-testid="weather-card">
            <Row className="card-details" >
                <Col xs="4">{getFormatDate(date)}
                {bestDayToSell&&moment().isSame(date,'day')&&<p>Best day to sell {bestDayToSell}</p> }
                </Col>
                <Col  xs="2">{main?.humidity}%</Col>
                <Col  xs="3">
                <img src={`http://openweathermap.org/img/wn/${weather?.icon}@2x.png`}/>
                <p>{weather?.main}</p>
                </Col>
                <Col  xs="3">{main?.temp} C &deg;</Col>
            </Row>
        </Card>
    )
}

export default WeatherCard