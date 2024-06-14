import React, {useState} from 'react'

export default function TextForm(props) {
   const [text, setText] = useState('');

   const handleOnChange = (event) => {
      setText(event.target.value)
   }
   
   const handleUpClick = () => {
      setText(text.toUpperCase())
   }
   
   const handleLoClick = () => {
      setText(text.toLowerCase())
   }

   const handleClearClick = () => {
      setText('')
   }
   
   const handleCopy = () => {
      navigator.clipboard.writeText(text)
      document.getSelection().removeAllRanges()
   }

   const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/)
      setText(newText.join(' '))
   }
   
   return (
      <>
         <div style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h2 className="my-3">{props.heading}</h2>
            <div className="mb-3">
               <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
         </div>
         <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h3 className='mb-1'>Your text summary</h3>
            <p className='mb-1'>{text.split(/\s+/).filter( (ele) => { return ele.length!==0 } ).length} words & {text.length} characters</p>
            <p className='mb-1'>{0.008 * text.split(/\s+/).filter( (ele) => { return ele.length!==0 } ).length} minutes read</p>
         </div>
         <div className="container my-4" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h3 className='mb-1'>Preview</h3>
            <p className='mb-1'>{text.length>0 ? text : 'Enter something in textbox to preview'}</p>
         </div>
      </>
   )
}
