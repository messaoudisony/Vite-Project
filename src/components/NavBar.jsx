import { useState, useEffect } from "react";

function Navbar({setValue, pokemonList}){

    const [name, setName] = useState("")

    useEffect(() => {

        if(name == "pikachu"){
            alert("pika pikachu !!!")
        }

    },[name])

      const handleClick = (i, name) =>{
        setValue(i)
        setName(name)
      }

   
return(

  <div>
    <div>
    {
         pokemonList.map((poki, index) => 
            <button key={index} onClick={() => handleClick(index, poki.name)}>
                {poki.name}
            </button>
         )
    }
    </div>

  </div>
)}


export default Navbar
