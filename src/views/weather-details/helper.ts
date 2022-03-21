
import { weatherDetailsResponse, filterType, cookedWeatherDetails } from "./types"
import moment from "moment"
export const getFinalWeatherDetails = (data: weatherDetailsResponse): cookedWeatherDetails[] => {
    const groupByDate = []
    const noOfDate = 5
    let i = 0
    while (i < noOfDate) {
        const newMoment = moment().add(i, 'days').format('YYYY-MM-DD')
        const temp = data.list.filter(({ dt_txt: responseDate }) => {
            if (moment(responseDate, 'YYYY-MM-DD mm:hh:ss').isSame(newMoment, 'day')) {
                return true
            }
        }).map(({ weather, main }) => ({ weather: weather[0], main }))

        groupByDate.push({ date: newMoment, details: getCommonWeatherForADay(temp) })

        i++
    }
    return groupByDate
}

export const findBestDayToSell = (weatherDetails: cookedWeatherDetails[]) => {

    const weatherCode = weatherDetails.map(({ details }) => details ? details.weather.id : 0)

    let umberlaDayCount = 0
    let jacketDayCount = 0
    let i = 0
    while (i < weatherCode.length) {
        const currentCode = weatherCode[i]
        if ((currentCode >= 200 && currentCode <= 531) || (currentCode >= 801 && currentCode <= 804)) {
            umberlaDayCount += 1
        } else if (currentCode >= 600 && currentCode <= 622) {
            jacketDayCount += 1
        }
        i++
    }

    if (umberlaDayCount === 5) {
        return 'Umberlla'
    } else if (jacketDayCount === 5) {
        return 'Jacket'
    }

    return ''

}

const getCommonWeatherForADay = (array: filterType[]) => {
    if (array.length == 0)
        return null;
    const modeMap: { [key:string]: number } = {};
    let finalWeather = array[0]
    let maxCount = 1;
    for (let i = 0; i < array.length; i++) {
        const el = array[i].weather.id;
        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if (modeMap[el] > maxCount) {
            finalWeather = array[i]
            maxCount = modeMap[el];
        }
    }
    return finalWeather;
}
