export type ComponentPropsType = {

}

export type useParamsType = {
    city: string | undefined
}

export type weatherReponse = {
    id: number,
    main: string,
    description: string,
    icon: string
}

export type weatherDetailsType = {
    dt: number,
    main: {
        [key: string]: number
    },
    weather: weatherReponse[],
    dt_txt: string
}

export type weatherDetailsResponse = {
    cod: string,
    cnt: number,
    list: weatherDetailsType[],
    message?: string
}

export type filterType = {
    weather: weatherReponse,
    main: {
        [key: string]: number
    }
}

export type cookedWeatherDetails = {
    date:string,
    details:filterType | null
}