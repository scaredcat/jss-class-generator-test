import React, {Component} from 'react'
import injectSheet from 'react-jss'

const style = {
  button: {
    border: props => props.border ? props.border : 'mistyrose 10px dashed',
  }
}

class SecondButton extends Component {
  render() {
    return <button className={this.props.classes.button}>Styled button test</button>
  }
}

export default injectSheet(style)(SecondButton)
