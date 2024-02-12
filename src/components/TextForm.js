import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const onUpClick = () => {
        // console.log('uppercase was clicked!', text);
        let changeToUpper = text.toUpperCase();
        setText(changeToUpper);
        // console.log('email area was clicked!', email);
    }
    const onDownClick = () => {
        let changeToLower = text.toLowerCase();
        setText(changeToLower);
    }
    const onClearAll = () => {
        let clearAll = "";
        setText(clearAll);
    }
    const onCheckWord = () => {
        let checkItAll = text.replaceAll('fuck', 'beep');
        setText(checkItAll);
    }
    const onCheckSpace = () => {
        let spaceAll = text.split(/[ ]+/);
        setText(spaceAll.join(" "));
    }
    const handleTextOnChange = (event) => {
        // console.log('handled on change');
        setText(event.target.value);
    }
    const handleEmailOnChange = (event) => {
        // console.log('handled on change again');
        setEmail(event.target.value);
    }
    // useState hook:- helps us to create and use state like below:-
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    // text = "new text"; //wrong way to update text.
    // setText("new text"); //correct way to update text or update state.
    return (
        <>
            <div className='container' style={props.mode} >
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <label htmlFor="myemail" className="form-label">Email Address</label>
                    <input type="email" className="form-control" value={email} onChange={handleEmailOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myemail" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">Text Here</label>
                    <textarea className="form-control" value={text} onChange={handleTextOnChange} id="mybox" rows="9" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
                </div>
                <button className="btn btn-danger mx-2" onClick={onUpClick}>Convert to Uppercase</button>
                <button className="btn btn-success mx-2" onClick={onDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={onClearAll}>Clear All</button>
                <button className="btn btn-warning mx-2" onClick={onCheckWord}>Check All</button>
                <button className='btn btn-secondary mx-2' onClick={onCheckSpace}>Format</button>
            </div>
            <div className="container my-3" style={props.mode}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h3>Preview Here</h3>
                <p>Your Email :- {email}</p>
                <p>Your Text :- {text}</p>
            </div>
        </>
    )
}
