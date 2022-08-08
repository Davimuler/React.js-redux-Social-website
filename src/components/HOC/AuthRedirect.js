import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

export const AuthRedirect=(Component)=>{
    class RedirectComponent extends React.Component{
render(){
    if(!this.props.isAuth){
        return <Navigate to='/login'/>
    }
    return <Component {...this.props}/>
}
    }
    let mapStateToPropsRedirect=(state)=>{
        return {
            isAuth:state.Auth.isAuth
        }
    }
    let withRedirectComponent=connect(mapStateToPropsRedirect)(RedirectComponent)

return withRedirectComponent


}
