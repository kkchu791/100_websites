import React, {Component} from 'react'

export default class LightSwitch extends Component {
  constructor() {
    super()
    
    this.state = { isClicked: false }
    this.onPress = this.onPress.bind(this)
  }

  renderActionSection(){
    if (this.state.isClicked) {
      return(
        <div style={{backgroundColor:'rgba(255,255,0,0.2)', height:1000}}>
          <button className="btn-warning" onClick={this.onPress}>Off</button>
        </div>
      )
    } else {
      return (
        <div style={{backgroundColor:'black', height:1000}}>
          <button className="btn-warning" onClick={this.onPress}>On</button>
        </div>
      )
    }
  }

  onPress() {
    this.setState({ isClicked: (this.state.isClicked == false ? true : false) })
    console.log(this.state.isClicked)
  }

  render() {
    return (
      <div>
        {this.renderActionSection()}
      </div>
      )
  }
}
