import { render,screen
 } from "@testing-library/react"
import Login from "../Login"

test("Checking component loaded",() => {
    //login loaded test
    render(<Login/>);
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
})
test("Checking email and password inputs are empty",()=>{
    render(<Login/>);
    expect(screen.queryByPlaceholderText('Email')).toHaveValue("");
    expect(screen.queryByPlaceholderText('Password')).toHaveValue("");
})