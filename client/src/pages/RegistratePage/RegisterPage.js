import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function RegisterPage() {
  const[form, setForm] = useState({email:"", pwd:"", username:""});
  const arrInput = ["email", "pwd", "username"];
  const result = arrInput.map((el)=><div><TextField name={el} id="standard-basic" label={el} variant="standard" onChange={changeForm}/></div>)

  function changeForm(event){
    setForm({...form, [event.target.name]: event.target.value})
  }
  async function show(){
    console.log(form);

  }
  return (
    <>
      <h1>Registration</h1>
      {result}
      <div>
        <Button variant="outlined" onClick={show}>Sign Up</Button>
      </div>
    </>
  );
}

export default RegisterPage;
