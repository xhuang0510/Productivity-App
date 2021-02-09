import React, { Component } from 'react'; //import React Component
import "./index.css";


export class StickyNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTitle: this.props.title,
            inputBody: this.props.body,
            isPinned: false
        }
    }

    remove = () => {
        this.props.remove(this.props.keyNum, this.state.isPinned);
    }

    editTitle = (textbox) => {
        this.setState({
            inputTitle: textbox.target.value
        }, () => {
            this.props.updateTitle(this.props.keyNum, this.state.inputTitle, this.state.isPinned);
        });
    }

    editBody = (textbox) => {
        this.setState({
            inputBody: textbox.target.value
        }, () => {
            this.props.updateBody(this.props.keyNum, this.state.inputBody, this.state.isPinned);
        });
    }

    pin = () => {
        if (this.isPinned) {
            this.isPinned = false
        } else {
            this.isPinned = true
        }
        this.props.pin(this.props.keyNum, this.isPinned)
    }

    render() {
        return (
            <div id ='notesWrapper'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
                <div className ='sticky-notes'>
                    <div className = 'note'>
                        <div className ='note-header'>
                            <button className = 'note-close' onClick={this.remove}>
                                {/* x button  */}
                                <i className="fas fa-times"></i>
                            </button>
                            <button className = 'note-pin' onClick={this.pin}>
                                {/* pin button */}
                                <i className="fas fa-thumbtack"></i>
                            </button>
                        </div>
                        <input ref={this.titleBar} value={this.state.inputTitle} className='note-title' contentEditable suppressContentEditableWarning={true} onInput={this.editTitle} size={50}/>
                        <textarea ref={this.bodyBar} value={this.state.inputBody} className='note-body' contentEditable suppressContentEditableWarning={true} onInput={this.editBody}/>
                    </div>
                </div>
            </div>
        );
    }
}

// You can do an array of elements to render them all at once
export class StickyNoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTitle: this.props.title,
            inputBody: this.props.body,
            isPinned: false
        }
    }

    updateStickyList = (index, isPinned) => {
        let newArray = this.props.stickyNotes;
        console.log(newArray);
        newArray.splice(index, 1);
        this.props.updateSticky(newArray);  
    }

    updateStickyTitle = (index, text, isPinned) => {
        let newArray = this.props.stickyNotes;
        newArray[index] = {
            title: text,
            body: newArray[index].body
        };
        this.props.updateSticky(newArray);
        
    }

    updateStickyBody = (index, text, isPinned) => {
        let newArray = this.props.stickyNotes;
        newArray[index] = {
            title: newArray[index].title,
            body: text
        };
        this.props.updateSticky(newArray);
       
    }

    pin = (index, isPinned) => {
        let newArray = this.props.stickyNotes;
        let currSticky = newArray[index];
        console.log(currSticky)
        this.updateStickyList(index, isPinned);
        if (isPinned) {
            newArray.unshift(currSticky);
        } else {
            newArray.push(currSticky)
        }
        this.props.updateSticky(newArray);
    }

    render() {
        let stickyNotes = this.props.stickyNotes;
        let stickyNoteDisplay = [];
        for(let i = 0; i < stickyNotes.length; i++) {
            stickyNoteDisplay.push(
                <StickyNote 
                    key={i} 
                    keyNum={i} 
                    remove={this.updateStickyList} 
                    updateTitle={this.updateStickyTitle} 
                    updateBody={this.updateStickyBody} 
                    title={stickyNotes[i].title} 
                    body={stickyNotes[i].body}
                    pin={this.pin}>
                </StickyNote>)
        }
        let renderDisplay = (
            <div className="scrollable">
                {stickyNoteDisplay}
            </div>
        )
        return renderDisplay;
    }
}

export class NewNoteButton extends Component {
    add = () => {
        let array = this.props.stickyNotes;
        array.push({
            title: "Title",
            body: "Text goes here"
        });
        this.props.updateSticky(array);
    }

    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
                <button className='new-note-button' onClick={this.add}>
                    New Note
                    <br></br>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        )
    }
}

export class LoadingScreen extends Component {
    render() {
        return(
            <div className="loading">
                <i className="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i>
                <p>Loading...</p>
            </div>
        )
    }
}