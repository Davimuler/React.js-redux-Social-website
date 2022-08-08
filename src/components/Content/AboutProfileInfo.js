import React from "react";

export  default class AboutProfileInfo extends React.Component{
 state={
editmode:false
}
ActivateEditMode(){
this.setState({
    editmode:true
})
}
    DeactivateEditMode(){
        this.setState({
            editmode:false
        })
    }
    render(){
        return<div>
            {this.state.editmode?
                <input value={this.props.aboutMe} autoFocus={true} onBlur={this.DeactivateEditMode.bind(this)}/>:
                <span onDoubleClick={this.ActivateEditMode.bind(this)}>{this.props.aboutMe}</span>
               }
        </div>
    }
}