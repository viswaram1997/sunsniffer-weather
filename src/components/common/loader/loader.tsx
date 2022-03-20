import React from "react"
import LoaderIcon from "assets/images/common/sunsniffer-loader.svg"
import "./style.scss"
import { ComponentPropsType } from "./types"
const Loader:React.FC<ComponentPropsType> = ({ insideComponent=false }) => {
    return <div className={`loader-wrapper ${insideComponent ? 'inside-wrapper':''}`}>
        <img src={LoaderIcon} className="loader-animation" alt="loader"/>
    </div>
}

export default Loader