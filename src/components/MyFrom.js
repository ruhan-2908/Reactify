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

    function handleChange(e)
    {
        const temp = e.target.name;
        const value = e.target.value;
        setInputs((prev) => {
            return {...prev,[temp] : value }
        })
    }
    return <form onSubmit={handleSubmit}>
            <label> Enter Your Name<input type="text" name="name" onChange={handleChange} /></label><br/>
            <label> Enter Your Age<input type="text" name="age" onChange={handleChange} /></label><br/>
            <label> Enter Your Email<input type="text" name="email" onChange={handleChange} /></label><br/>
            <input type="submit" value="Submit Form"/>
        </form>
}
export default MyForm;