
function Navbar({value, setValue, max}){

    
      const decrement = () =>{
        setValue(value-1)
      }
        const increment = ()=>{
        setValue(value+1)
      }

return(

  <div>
      { value > 0 ?
        <button onClick={decrement}>Précédent</button>
        :
        <></>
      }
      {value < max ?
      <button onClick={increment}>Suivant</button>
      :
      <></>
      }
  </div>
)}


export default Navbar
