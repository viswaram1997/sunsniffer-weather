import { useState } from "react"
import axios from "helpers"
import { AxiosResponse } from "axios"
import { hooksProps } from "./types"

const useAPI = <T>() => {

    const [loading, updateLoading] = useState<boolean>(false)
    const [error, updateError] = useState<boolean>(false)
    const [data, updateData] = useState<T>()

    const makeAPICall = ({ url, method }: hooksProps) => {
        updateLoading(true)
        axios[method](url).then(({ data }: AxiosResponse) => {
            updateData(data)
            updateError(false)
            updateLoading(false)
        }).catch(({ response }) => {
            updateError(true)
            updateData(response.data)
            updateLoading(false)
        })
    }

    return { loading, makeAPICall, error, data }

}

export default useAPI