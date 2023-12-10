import React, {useState} from "react";

export default function TextForm(props) {
    const [Text, setText] = useState("");
    // Text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
    const handleUpClick = () =>{
        // console.log("upperCase button was clicked");
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleDownClick = () =>{
        // console.log("lowerCase button was clicked");
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = () =>{
        // console.log("clearText button was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("text is cleared", "success");
    }
    const handleReverseClick = () =>{
        // console.log("reverseText button was clicked"); 
        let newText = Text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Converted to reversetext", "success");
    }
    const handleCapitalClick = () =>{
        // console.log("capitalText button was clicked"); 
        let capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); //converts first letter of string to uppercase and rest to lower
        let capitalizeWord = (str) => str.split(' ').map(capitalizeString).join(' '); // converts a single string to array of string using split. Now map iterates through each string of array and applies capitalizeString method everytime.
        let newText = capitalizeWord(Text);
        setText(newText);
        props.showAlert("Converted to capitaltext", "success");
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value); // this is used for concantenation of string 
    }
    return (
        <>
        <div className="container" style= {{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'} || {backgorundColor: props.red ==='red'?'#cbcbcb':'white', color: props.red ==='red'?'black':''}} value={Text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalClick}>Capital text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3" style= {{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{Text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {Text.length} characters</p>
            <h3>Preview</h3>
            <p>{Text}</p>
            <p>{Text.split(" ").length} words can be read in {0.008 * Text.split(" ").length} minutes or {0.48 * Text.split(" ").length} seconds</p>
        </div>
        </>
  );
}
