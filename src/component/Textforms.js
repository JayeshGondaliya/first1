import React, { useState } from 'react'

export default function Textforms() {
    // text
    const [Text, setText] = useState("Enter Text Here Bro!!!!!!!")

    let onchangeEvent = (e) => {
        console.log("hello");
        setText(e.target.value)
    }
    let TransferToUpper = () => {
        let newUpper = Text.toUpperCase();
        setText(newUpper)
    }
    let TransferToLower = () => {
        let newUpper = Text.toLowerCase();
        setText(newUpper)
    }
    // change color
    const [myColor, setMyColor] = useState({
        color: "white",
        backgroundColor: "black",
        border: "2px solid white"
    })
    // change btn text
    const [btnText, setbtnText] = useState("Enable to LightMode")
    let toggleColor = () => {
        if (myColor.color == "white") {
            setMyColor({
                color: "black",
                backgroundColor: "white",
                border: "2px solid black"

            })
            setbtnText("Enable to Dark")
        }
        else {
            setMyColor({
                color: "white",
                backgroundColor: "black",
                border: "2px solid white"

            })
            setbtnText("Enable to Light")

        }
    }

    return (
        <>
            <div className="container my-5" style={myColor}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Text Area</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={Text} onChange={onchangeEvent}></textarea>
                    <button className='btn btn-outline-primary my-3 mr-5' onClick={TransferToUpper}>UpperCase</button>
                    <button className='btn btn-outline-primary my-3 mr-5' onClick={TransferToLower}>LowerCase</button>
                </div>
                <h1>Text Summary</h1>
                <p>{Text.split(" ").length - 1} words  and  {Text.length} text can contain</p>

                <p>{Text}</p>
                <button className='btn btn-secondary' onClick={toggleColor}>{btnText}</button>
            </div>
        </>
    )

}