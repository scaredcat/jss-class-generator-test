import React, {Component} from 'react'
import injectSheet from 'react-jss'

const style = {
  button: {
    color: props => 'rebeccapurple',
  }
}

class Button extends Component {
  render() {
    return <button className={this.props.classes.button}>Styled button test</button>
  }
}

export default injectSheet(style)(Button)
