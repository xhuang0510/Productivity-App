import React, { Component } from 'react'; //import React Component
import './App.css';
import {LeftMenu, RightMenu, CenterMenu} from "./Menus"

export class App extends Component {
  // Initializing the state of the application
  constructor(props) {
    super(props);
    this.state = {
      scheduleObjects: [],
      stickyNoteObjects: [],

    }
  }

  // test
  sayhello = () => {
    console.log("Hello World!");
  }

  updateState = (state) => {
    this.setState(
      () => {
        return state;
      }
    )
  }

  // Resets display state to default if window is resized
  componentDidMount() {
    window.addEventListener('resize', this.render());
  } 

  // Removes the listener once the job is done
  componentWillUnmount() {
    window.removeEventListener('resize', this.render());
  }

  // Renders the application
  render() {
    console.log("Rendering...");
    return (
      <div className="App" id="App">
        <LeftMenu className="menu"></LeftMenu>
        <CenterMenu className="menu"></CenterMenu>
        <RightMenu className="menu"></RightMenu>
      </div>
    );
  }
}

export default App;
