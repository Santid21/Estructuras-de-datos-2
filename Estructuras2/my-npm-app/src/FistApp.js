import { useState } from "react"
 const  FirstApp = ({x=10}) => {

    const [counter, setCounter] = useState(x)
    const HandleAdd = () => {
        setCounter(counter + 1)
    }
    return (
    <>
       <h1>counter</h1>
       <span> {counter}</span>
       <button onClick={() => HandleAdd()}>+1</button>
    </>
    )
}
export default FirstApp