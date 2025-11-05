import { useState } from "react";

function MyForm()
{
    // const [name,setName] = useState("");

    // const [age,setAge] = useState("");
    // const [email,setEmail] = useState("");
    const [inputs,setInputs] = useState({});
    function handleSubmit(e)
    {
        e.preventDefault();
        console.log("Form submitted!");
        console.log(inputs);
    }
    return <form onSubmit={handleSubmit}>
            <label> Enter Your Name<input type="text" onChange={(e)=>{ setInputs((prev) => {return {...prev,name: e.target.value}})}} /></label><br/>
            <label> Enter Your Age<input type="text" onChange={(e)=>{ setInputs((prev) => {return {...prev,age:e.target.value}})}} /></label><br/>
            <label> Enter Your Email<input type="text" onChange={(e)=>{ setInputs((prev) => {return {...prev,email:e.target.value}})}} /></label><br/>
            <input type="submit" value="Submit Form"/>
        </form>
}
export default MyForm;