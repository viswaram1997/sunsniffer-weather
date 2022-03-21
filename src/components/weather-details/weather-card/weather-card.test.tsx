import { render, fireEvent } from "@testing-library/react";
import WeatherCard from "./index"
import moment from "moment"

let cardDetails = {"date":"2022-03-25","details":{"weather":{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"},"main":{"temp":30.24,"feels_like":35.63,"temp_min":30.24,"temp_max":30.24,"pressure":1006,"sea_level":1006,"grnd_level":1005,"humidity":70,"temp_kf":0}}}
let cardDetails1 = {"date":moment().format('YYYY-MM-DD'),"details":{"weather":{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"},"main":{"temp":30.24,"feels_like":35.63,"temp_min":30.24,"temp_max":30.24,"pressure":1006,"sea_level":1006,"grnd_level":1005,"humidity":70,"temp_kf":0}}}

describe('Weather Card', () => {

    test('should match snapshot', () => {
        const result = render(<WeatherCard
            bestDayToSell=""
            cardDetails={cardDetails}
        />)
        expect(result.baseElement).toMatchSnapshot();
    })

    test('should display details properly', async () => {
        const result = render(<WeatherCard
            bestDayToSell=""
            cardDetails={cardDetails}
        />)
        const label = await result.findByText('30.24 C °')
        const weather = await result.findByText('Clouds')
        const humidity = await result.findByText('70%')
        const date = await result.findByText('Fri')

        expect(label).not.toBeNull()
        expect(weather).not.toBeNull()
        expect(humidity).not.toBeNull()
        expect(date).not.toBeNull()
    })
    test('should display best day to sell', async () => {
        const result = render(<WeatherCard
            bestDayToSell="Umberla"
            cardDetails={cardDetails1}
        />)
        const label = await result.findByText('Best day to sell Umberla')
        expect(label).not.toBeNull()
    })
    test('should display date as today', async () => {
        const result = render(<WeatherCard
            bestDayToSell="Umberla"
            cardDetails={cardDetails1}
        />)
        const date = await result.findByText('Today')
        expect(date).not.toBeNull()
    })

});