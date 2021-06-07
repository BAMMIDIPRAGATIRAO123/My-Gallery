// import logo from './logo.svg';
import './Images.css';
// import Images from './components/Images'

import React, { Component } from 'react'

export class Popup extends Component {
  render() {
    return (
      <div className="popupParent">
        <div className="popupImage">
            <button className="imageClosingButton" onClick={this.props.closePopup}>
                X
            </button>
            <img src={this.props.popImageurl} alt=""></img>
        </div>
      </div>
    )
    }
}

export default Popup;

