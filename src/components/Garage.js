import Car from "./Car"
import Apple from "./Apple"
import Gun from "./Gun"
function Garage()
{
    // const brand = 'Ferrari';
    // const color = 'Black';
    const isDoorOpenend = true;
    const carInfo = {
        brand : "Ferrari",
        color : "Black"
    }
    // const carInfo = {};
    const appleInfo ={
        type : "Fuji",
        color : "Red"
    }
    const carList = [
        {
            brand : 'BMW', color : "Red"
        },
        {
            brand : "Ford" , color : "Green"
        },
        {
            brand : "Tesla" , color : "Black"
        }
    ];

    const numberList = [1,2,3,4,5,6];
    const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined
  return(
    <>
    <h1>Who lives inside my garage?</h1>
    {/* <Car brand={brand} color={color}/> */}
    { showCarInfo && <Car carInfo={carInfo}/>}
    <Apple appleInfo = {appleInfo}/>
    <Gun/>

    {isDoorOpenend ? <h2>Garage Door is Open</h2> : <h2>Garage Door is closed</h2>}
    <ul>
        { carList.map((carInfo) => <li key={carInfo.brand}><Car carInfo={carInfo}/></li>)  }
    </ul>
    <ul>
        {
            numberList.map((no,index)=><p key={index}>{no}</p>)
        }
    </ul>
  </>
  );
}

export default Garage;