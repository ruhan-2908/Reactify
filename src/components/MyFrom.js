import { useState } from "react";

function MyForm()
{
    // const [name,setName] = useState("");

    // const [age,setAge] = useState("");
    // const [email,setEmail] = useState("");
    const [inputs,setInputs] = useState({phone:"+91",email:"@gmail.com"});
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
            <label> Enter Your Email<input type="text" name="email" onChange={handleChange} value={inputs.email} /></label><br/>
            <label> Enter Your phone<input type="text" name="phone" onChange={handleChange} value={inputs.phone} /></label><br/>
            <label> Enter Your Country<select name="country" onChange={handleChange}>
                    <option value={""}>Select</option>
                    <option value={"Australia"}>Australia</option>
                    <option value={"India"}>India</option>
                    <option value={"United States"}>United States</option>
                </select></label><br/>
            <input type="submit" value="Submit Form"/>
        </form>
}
export default MyForm;