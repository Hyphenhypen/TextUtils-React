import React, { useState } from "react"

export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("Upper Case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleloClick = ()=>{
    // console.log("Upper Case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handlecleartext = ()=>{
    // console.log("Upper Case was clicked" + text);
    let newText = "";
    setText(newText)
  }

  const handlecopy =()=>{
   console.log("I am copy");
   var text = document.getElementById("myBox");
   text.select();
   text.setSelectionRange(0,9999);
   navigator.clipboard.writeText(text.value);
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const handleExtraspaces=()=>{
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "))
  }
  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={handlecleartext}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy to Clipboard</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>
      
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008* (text.split(" ").length-1)} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
  }
