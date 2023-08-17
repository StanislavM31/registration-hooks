import React, {useState} from "react";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";

function AuthPage(){
    const [form, setForm] = useState({email:"", pwd:""});
    const arrInput = [ "email", "pwd"];
    const result = arrInput.map((el)=><div><TextField name={el} id="standard-basic" label={el} variant="standard" onChange={changeForm}/></div>)

    function changeForm(event){
        setForm({...form, [event.target.name]: event.target.value})
    }
    async function show(){
        console.log("filled form", form);
        const result = await fetch("http://localhost:3001/api/authorize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        const json = await result.json();
        console.log(json);
    }
    return(
        <>
        <h1>Authorization</h1>
        {result}
        <div>
        <Button variant="outlined" onClick={show}>Sign Up</Button>
        </div>
        </>
    )
}

export default AuthPage