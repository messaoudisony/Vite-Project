
function Navbar({setValue, pokemonList}){

      const handleClick = (i) =>{
        setValue(i)
      }

return(

  <div>
    <div>
    {
         pokemonList.map((poki, index) => 
            <button key={index} onClick={() => handleClick(index)}>
                {poki.name}
            </button>
         )
    }
    </div>

  </div>
)}


export default Navbar
