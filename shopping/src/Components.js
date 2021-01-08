import React, { Component } from 'react'; //import React Component
import "./index.css";


export class StickyNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.title
        }
        this.titleBar = React.createRef();
    }

    remove = () => {
        this.props.remove(this.props.keyNum);
    }

    edit = (textbox) => {
        this.setState({
            inputValue: textbox.target.value
        }, () => {
            this.props.update(this.props.keyNum, this.state.inputValue);
        });
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
                            <button className = 'note-pin'>
                                {/* pin button */}
                                <i className="fas fa-thumbtack"></i>
                            </button>
                        </div>
                        <input ref={this.titleBar} value={this.state.inputValue} className='note-title' contentEditable suppressContentEditableWarning={true} onInput={this.edit} />
                        <div className='note-body' contentEditable suppressContentEditableWarning={true} onInput={this.edit}>
                            {this.props.body}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// You can do an array of elements to render them all at once
export class StickyNoteList extends Component {
    updateStickyList = (index) => {
        let newArray = this.props.stickyNotes;
        newArray.splice(index, 1);
        this.props.updateSticky(newArray);
    }

    updateStickyText = (index, title) => {
        let newArray = this.props.stickyNotes;
        newArray[index] = {
            title: title,
            body: newArray[index].body
        };
        this.props.updateSticky(newArray);
    }

    render() {
        let stickyNotes = this.props.stickyNotes;
        let stickyNoteDisplay = [];
        for(let i = 0; i < stickyNotes.length; i++) {
            stickyNoteDisplay.push(<StickyNote key={i} keyNum={i} remove={this.updateStickyList} 
                update={this.updateStickyText} title={stickyNotes[i].title} body={stickyNotes[i].body}></StickyNote>)
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

