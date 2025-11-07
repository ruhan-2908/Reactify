import { useEffect, useState } from "react";

function Timer()
{
    const [count, setCount] = useState(1);
    useEffect(() =>{
        console.log("Screen Rendered");
        // checkCount();
        // setCount(1);

        // setTimeout(() =>{
        //     setCount((prev) => {return prev-1;})
        // },1000)
    })



    function updateCount()
    {
        checkCount();
        setCount((prev) => {
            return prev+1;
        })
    }


    function checkCount()
    {
        if(count > 10)
        {
            setCount(1);
        }
    }
    return <>
    <h1>I have rendered {count} times!</h1>
    <button onClick={updateCount}> Increase count</button>
    </>
}

export default Timer;