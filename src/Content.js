 


const Content = () => {
    const handleNameChange =()=>{
        const names=['sam','bob','david'];
        const int = Math.floor(Math.random()*3);
        return names[int];
    }
     
    const handleClick = () =>{
        console.log('you clicked it');
    }
    const handleClick2 = (name) =>{
        console.log(`${name} was clicked`);
    }
    const handleClick3 = (e) =>{
        console.log(e.target);
    }

  return (
        <main>
            <p> 
                Hello {handleNameChange()}!
            </p>
    <button onClick={handleClick}>click it</button>
    <button onClick={()=>handleClick2('sam')}>click it</button>
    <button onClick={(e)=>handleClick3(e)}>click it</button>
        </main>
  )
}

export default Content