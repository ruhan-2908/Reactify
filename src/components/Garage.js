import Car from "./Car"
import Apple from "./Apple"
function Garage()
{
    // const brand = 'Ferrari';
    // const color = 'Black';

    const carInfo = {
        brand : "Ferrari",
        color : "Black"
    }

    const appleInfo ={
        type : "Fuji",
        color : "Red"
    }
  return(
    <>
    <h1>Who lives inside my garage?</h1>
    {/* <Car brand={brand} color={color}/> */}
    <Car carInfo = {carInfo}/>
    <Apple appleInfo = {appleInfo}/>
  </>
  );
}

export default Garage;