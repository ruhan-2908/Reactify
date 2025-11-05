import {useState} from "react";
function List()
{
    const [list,setList] = useState([]);
    const [count, setCount] = useState(1);
    function addItem()
    {
        const itemName = 'Item ' + count ;
        setList((prev)=> {return [...prev,itemName]})
        setCount((prev) => {
            return prev+1;
        })
    }
    return <>
        <h1> List </h1>
        <button onClick={addItem}>Add item</button>
        <ul>{
            list.map((el,index) => <li key={index}>{el}</li>)
            }
        </ul>
    </>
}

export default List;