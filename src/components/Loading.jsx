import React from "react";
import S from './Loading.module.css'
import loadingImg from '../images/loading_icon.gif'

let Loading=()=>{
    return<div>
        <img className={S.LoadingImg} src={loadingImg}/>
        </div>

}
export default Loading