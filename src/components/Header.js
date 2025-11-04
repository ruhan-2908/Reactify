import './Header.css';
import styles from './Header.module.css';
function Header()
{

    const myStyle = {
        color: "red",
        backgroundColor : "lightblue",
        padding : "20px",
        fontFamily : "Sans-Serif"
    }
    return <>
        {/* <h1 class style={myStyle}>Hello Styling</h1> */}
        <h1 className={styles.bigBlue}>Hello Styling</h1>
        <p>Add a little style</p>
    </>
}
export default Header;