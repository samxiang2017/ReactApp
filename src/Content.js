 
import { useState } from "react";

const Content = () => {
    const [name,setName]=useState('dave');
    const [count,setCount] = useState(0);


    const handleNameChange =()=>{
        const names=['sam','bob','david'];
        const int = Math.floor(Math.random()*3);
        setName(names[int]);
    }
     
    const handleClick = () =>{
        setCount(count +1);
        setCount(count +1);
        console.log(count);
    }
    const handleClick2 = () =>{
        console.log(count);
    }
    const handleClick3 = (e) =>{
        console.log(e.target);
    }

  return (
        <main>
            <p > 
                Hello {name}!
            </p>
    <button onClick={handleNameChange}>change name</button>
    <button onClick={handleClick}>click it</button>
    <button onClick={handleClick2}>click it</button>
        </main>
  )
}

export default Content