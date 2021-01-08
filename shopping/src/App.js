import React, { Component } from 'react'; //import React Component
import { LeftMenu, RightMenu, CenterMenu } from "./Menus"
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';


export class App extends Component {
  // Initializing the state of the application
  constructor(props) {
    super(props);
    this.state = {
      /*
        {
          startTime: something,
          endTime: something,

        }
      */
      scheduleObjects: [],
      pinnedStickyNotes: [],
      stickyNotesList: [
        {
          title: "Note 1",
          body: "This is Note 1!"
        },
        {
          title: "Note 2",
          body: "This is Note 2!"
        },
        {
          title: "Note 3",
          body: "This is Note 3!"
        },
        {
          title: "Note 4",
          body: "This is Note 4!"
        }
      ],
      /*
        {
          readingTime: 90,
          mathTime: 60,
          ...
        }
      */
     // Average math time: 45 min
     // On average personal math time: 35 min
     // Set new personalized time for our algorithm
      personalStats: [

      ],
      displayMode: "light"
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

  updateStickies = (stickyArray) => {
    this.setState({
      stickyNoteObjects: stickyArray
    })
  }

  updatePinnedStickies = (pinnedStickyArray) => {
    this.setState({
      pinnedStickyNotes: pinnedStickyArray
    })
  }

  toggleDisplayMode = () => {
    let mode = ""
    if(this.state.displayMode === "light") {
      mode = "dark";
    } else {
      mode = "light"
    }
    this.setState({
      displayMode: mode
    });
    console.log(this.state.displayMode);
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
    console.log(this.state.stickyNoteObjects);
    return (
      <div className="App" id="App">
        <Router>
          <div id="leftMenu" className={this.state.displayMode}>
            <LeftMenu className="menu" toggle={this.toggleDisplayMode}></LeftMenu>
          </div>
          <div id="centerMenu" className={this.state.displayMode}>
            <CenterMenu className="menu"></CenterMenu>
          </div>
          <div id="rightMenu" className={this.state.displayMode}>
            <RightMenu 
              className="menu" 
              updateSticky={this.updateStickies} 
              stickyNotes={this.state.stickyNotesList} 
              pinnedStickyNotes={this.state.pinnedStickyNotes}
              updatePinnedStickies={this.updatePinnedStickies}>
            </RightMenu>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
