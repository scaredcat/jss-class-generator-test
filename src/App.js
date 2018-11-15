import React, { Component } from 'react';
import {create as createJss} from 'jss'
import {JssProvider} from 'react-jss'
import Button from './Button'
import SeconButton from './SecondButton'
import ThirdButton from './ThirdButton'

const jss = createJss()
jss.use()

class App extends Component {
  state = {
    toggle: true,
  }

  toggle = () => {
    this.setState(prevState => ({toggle: prevState.toggle ? undefined : true}))
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.toggle}>Toggle!!!</a>
        {this.state.toggle && <JssProvider jss={jss}>
          <div>
            <Button /><Button />
            <br/><br/>
            <SeconButton />
            <br /><br />
            <ThirdButton />
          </div>
        </JssProvider>}
      </div>
    );
  }
}

export default App;
