import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'


class Picture extends React.Component{
    constructor(props){
    super()
  }
    render(){
        return(
            <div>
                <div className = 'header_back'>
                    <NavLink to = '/'><img className = "arrow" src="https://www.flaticon.com/svg/static/icons/svg/3925/3925153.svg" alt=""/></NavLink>
                    <p className = 'header_back-name'>{this.props.item.user.name}</p>
                </div>
                <div>
                    <img className = "img_raw" src={this.props.item.urls.raw} alt=""/>
                </div>
                </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        item: state.active
    }
}

export default connect(mapStateToProps)(Picture)