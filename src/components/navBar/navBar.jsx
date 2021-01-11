import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import Select from '../../containers/action/selectPicture';

class NavBar extends React.Component{
  constructor(props){
    super()
  }
  showPicture(){
    return this.props.arr.arr.map((item) => {
         return (
            <div key = {item.id} className = "container">
              <NavLink to = '/picture'>
                <img className = 'small_img' onClick = {() => this.props.Select(item)} key = {item.id} src={item.urls.small} alt=""/>
              </NavLink>
              <p>{item.user.name}</p>
            </div>
            )
       })
  }
  render(){
      return(
        <div>
          <div>
            <h1>GALLERY</h1>
          </div>
          <div>
            <div>{this.showPicture()}</div>
 
          </div>
        </div>
      )
  }
}
function mapStateToProps (state) {
  return {
    arr: state.fetchReducer
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({Select : Select},dispatch)
  
}

export default connect(mapStateToProps,matchDispatchToProps)(NavBar)