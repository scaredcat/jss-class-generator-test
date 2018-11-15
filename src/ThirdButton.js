import React, {Component} from 'react'
import injectSheet from 'react-jss'

const style = {
  button: {
    'background-color': props => 'blue'
  }
}

class ThirdButton extends Component {
  render() {
    return <button className={this.props.classes.button}>Styled button test</button>
  }
}

export default injectSheet(style)(ThirdButton)
