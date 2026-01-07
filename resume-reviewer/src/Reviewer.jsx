import React, { useState } from "react"

export function ResumeReviewer(){
    let [resumeText, setResume]=useState("")
    let [response, setResponse]=useState("")

    let SubmitResume=async()=>{
        try{
        const res=await fetch("http://127.0.0.1:8000/api/review/",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({resume:resumeText}),
        })
        let data=await res.json();
        setResponse(data.message);
    }catch (error){
    console.error("Error submitting resume:",error);
}
}
    return (
        <div className="text">
            <textarea id="textarea"
            rows="10"
            cols="60"
            placeholder="paste your resume"
            value={resumeText}
            onChange={(e)=>setResume(e.target.value)}/>
            <br></br>
            <button type="button"  onClick={SubmitResume}>Submit</button>
            <h3>Backend Response:</h3>
            <p>{response}</p>

        </div>
    )
}